import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      searchResults : [{
        name : 'Viens danser',
        artist : 'Gilbert M',
        album : 'Nevermind'
      }],
      playlistName : 'My Playlist',
      playlistTracks : [
        { name : 'Hiver prochain' ,
         artist : 'Skwere' ,
         album : '119' }
      ] 
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
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

    this.setState({playlistTracks: tracks});
    console.log(tracks)
  }

  render() {
    return (
      <div>
        <h1>My <span className="highlight">DJ</span> is me !</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
