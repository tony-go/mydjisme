import React from 'react';
import ReactDOM from 'react-dom';
import './SearchResults.css'
import TrackList from '../TrackList/TrackList'

class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Choose your song !</h2>
        <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd}/>
      </div>
    )
  }
}

export default SearchResults;