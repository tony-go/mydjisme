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
      playlistResults : [] 
    }
  }

  render() {
    return (
      <div>
        <h1>My <span className="highlight">DJ</span> is me !</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist playlistResults={this.state.playlistResults} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
