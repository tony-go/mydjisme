let token; 

const clientId = 'f45c43ff5f6a45e5806c625cf3e1b193'; // Put you own clientId Here ! 
const redirectUri ='http://localhost:3000/'; // Don't forget to declare your redirect URL in the Spotify App


const Spotify = {
	
	getAccessToken() {
		if (token) {
			return token;
		}

		const tokenMatch = window.location.href.match(/access_token=([^&]*)/)
		const expireMatch = window.location.href.match(/expires_in=([^&]*)/)
		
		if (tokenMatch && expireMatch) {
			token = tokenMatch[1]; 
			const expiresIn = Number(expireMatch[1]);

			window.setTimeout(() => token = '', expiresIn * 1000); // Token expiration limit
			window.history.pushState('Access Token', null, '/'); // Clear the parameter from url 
			console.log(token)
			return token;
		} else {
			const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
			window.location = accessUrl;
		}
	},

	search(searchTerm) {
		const token = Spotify.getAccessToken();

		return fetch (`https://api.spotify.com/v1/search?type=TRACK&q=${searchTerm}`,
			{ headers : 
			{ 
				Authorization: `Bearer ${token}`
			}
		}
		)
		.then(
			response => {return response.json()}
		)
		.then(
			json => {
				if (!json.tracks) {
					return []; 
				}
				return json.tracks.items.map(
					track =>  ({
						id : track.id,
						name : track.name,
						artist : track.artists[0].name,
						album : track.album.name,
						uri : track.uri
					})
				)
				
			}
		)
	},

	// savePlaylist(playlistName, trackURIs) {
	// 	if (!playlistName || !trackURIs) {
	// 		return;
	// 	}
	// 	//console.log(playlistName + trackURIs)
	// 	const token = Spotify.getAccessToken();
	// 	const headers = { Authorization: `Bearer ${token}` };
	// 	let userId;
	// 	let playlistId;

	// 	return fetch(`https://api.spotify.com/v1/me`, {
	// 		headers : headers
	// 	})
	// 	.then(response => {
	// 		response.json()
	// 	})
	// 	.then(jsonResponse => {
	// 		userId = jsonResponse.id;
	// 		return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
	// 			headers : headers,
	// 			method : 'POST', 
	// 			body : JSON.stringify( {name : playlistName} )
	// 		})
	// 		.then(response => {
	// 			response.json();
	// 		})
	// 		.then(jsonResponse => {
	// 			playlistId = jsonResponse.id;
	// 			return fetch(`https://api.spotify.com/v1/users/{userId}/playlists/${playlistId}/tracks`, {
	// 				headers : headers, 
	// 				method : 'POST',
	// 				body: JSON.stringify( {uris: trackURIs} )
	// 			})
	// 		})

	// 	})
	// }
	savePlaylist(playlist, trackURIs) {
		
			if(!playlist || !trackURIs) {
			  return;
			}
		
			const accessToken = Spotify.getAccessToken();
			const headers = { 'Authorization': `Bearer ${accessToken}` }
			let userID;
			let playlistID;
		
			return fetch(`https://api.spotify.com/v1/me`, { headers: headers }).then(
			  response => {
				if(response.ok) {
				  return response.json()
				}
				throw new Error('Error retrieving user id.');
			  }
			).then(
			  responseJSON => {
				userID = responseJSON.id;
		
				headers['Content-Type'] = 'application/json';
				let bodyString = JSON.stringify({  name: JSON.stringify(playlist) });
		
				fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, { method: 'POST', headers: headers, body: bodyString }).then(
				  response => {
					if(response.ok) {
					  return response.json()
					}
					throw new Error("Error creating new playlist for user.");
				  }
				).then(
				  responseJSON => {
					playlistID = responseJSON.id;
		
					bodyString = JSON.stringify({ uris: trackURIs });
					fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`, {method: 'POST', headers: headers, body: bodyString}).then(
					  response => {
						if(!response.ok) {
						  throw new Error("Error adding tracks to playlist.");
						}
					  }
					).catch(
					  error => {
						console.log(`AddTrackToPlaylistError: ${error}`);
						return false;
					  }
					);
				  }
				).catch(
				  error => {
					console.log(`CreatePlaylistError: ${error}`);
					return false;
				  }
				)
				return true; //Want this to return if both inside fetches do not return an error, but it seems to return TRUE even if there is an error.
			  }
			).catch(error => {
			  console.log(`GetUserIDError ${error}`);
			  return false;
			});
		
		  }

}
export default Spotify

// GET current user's ID
// POST a new playlist with the input name to the current user's Spotify account. Receive the playlist ID back from the request.
// POST the track URIs to the newly-created playlist, referencing the current user's account (ID) and the new playlist (ID)
