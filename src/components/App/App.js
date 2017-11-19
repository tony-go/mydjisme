import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import Spotify from '../../util/Spotify'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      searchResults : [],
      playlistName : 'My Playlist',
      playlistTracks : [] 
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this); 
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (!tracks.includes(track)) {
      tracks.push(track);
      this.setState({playlistTracks: tracks});
    }
  }

  // Thnik to change name by id after the Request part of the project
  removeTrack(track) {
    let tracks = this.state.playlistTracks.filter(currentTrack => currentTrack.name !== track.name);
    this.setState({playlistTracks: tracks})
    console.log(tracks)
  }

  updatePlaylistName(name) {
    this.setState({ playlistName : name })
  }

  // In a later step, you will pass the trackURIs array and playlistName to a method that will save the user's playlist to their account.
  savePlaylist() {
    let trackURIs = []; 
    this.state.playlistTracks.map(
      track => {
        trackURIs.push(track.uri)
        Spotify.savePlaylist(this.state.playlistName, trackURIs)
        //return (trackURIs)
      }
    )
  }

  search(searchTerm) {
    Spotify.search(searchTerm)
    .then( searchResults => {
      this.setState( {searchResults : searchResults} )
    }
    )
  }

  render() {
    return (
      <div>
        <h1>My <span className="highlight">DJ</span> is me !</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults  searchResults={this.state.searchResults} 
                            onAdd={this.addTrack} />
            <Playlist   playlistName={this.state.playlistName} 
                        playlistTracks={this.state.playlistTracks} 
                        onRemove={this.removeTrack} 
                        onNameChange={this.updatePlaylistName} 
                        onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
