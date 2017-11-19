let token; 

const clientId = 'f45c43ff5f6a45e5806c625cf3e1b193'; // Put you own clientId Here ! 
const redirectUri ='http://localhost:3000/'; // Don't forget to declare your redirect URL in the Spotify App


class Spotify {
	
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
	}

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
			console.log(searchTerm)
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
					track => { return ({
						id : track.id,
						name : track.name,
						artist : track.artist[0].name,
						album : track.album.name,
						URI : track.uri
					})}
				)
				
			}
		)
	}
}


export default Spotify