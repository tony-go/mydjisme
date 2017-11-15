import React from 'react';
import ReactDOM from 'react-dom';
import './TrackList.css'
import Track from '../Track/Track'

class TrackList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.tracks[0])
    return (
      <div className="TrackList">
        {
          // this.props.tracks[0].name
          // this.props.tracks.map(
          // function(track) {
          //   return <Track track={track} />
          //   }
          // )
        }
      </div>
    )
  }
}

export default TrackList; 
