import React from 'react';
import ReactDOM from 'react-dom';
import './SearchBar.css'

class SearchBar extends React.Component {
  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" />
        <a>FIND !</a>
      </div>
    )
  }
}

export default SearchBar;