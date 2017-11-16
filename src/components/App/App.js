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
      playlistName : '',
      playlistTracks : [
        { name : 'Hiver prochain' ,
         artist : 'Skwere' ,
         album : '119' }
      ] 
    }

    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    console.log('yoyooy')
    // if (!this.state.playlistTracks.track.id) {
    //     this.setState({playlistTracks : track});
    // }
  }

  render() {
    return (
      <div>
        <h1>My <span className="highlight">DJ</span> is me !</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
