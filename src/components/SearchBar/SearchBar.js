import React from 'react';
import ReactDOM from 'react-dom';

export class SearchBar extends React.Component {
  render() {
    return (
      <div class="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" />
        <a>SEARCH</a>
      </div>
    )
  }
}
