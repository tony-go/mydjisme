import React from 'react';
import ReactDOM from 'react-dom';
import './SearchBar.css'

class SearchBar extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      searchTerm : ''
    }

    this.handleSearch = this.handleSearch.bind(this)
    this.search = this.search.bind(this);
  }

  handleSearch(event) {
  
   this.setState({ searchTerm : event.target.value })
   console.log(this.state.searchTerm)
  }
  
  search() {
    this.props.onSearch(this.state.searchTerm);
  }

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleSearch} />
        <a onClick={this.search} >FIND !</a>
      </div>
    )
  }
}

export default SearchBar;