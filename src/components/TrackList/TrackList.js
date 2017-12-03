import React from 'react';
import ReactDOM from 'react-dom';
import './TrackList.css'
import Track from '../Track/Track'

function AudioPreview(props) {
  return (
    <audio src={props.previewURL} autoPlay>
      Preview
    </audio>
  )
}

class TrackList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      playing : false
    }

    this.playPreview = this.playPreview.bind(this);
  }

  playPreview() {
    this.setState({playing : true})
  }


  render() {
    return (
      <div className="TrackList">
        {
          this.props.tracks.map(
          track =>  {
            return  <Track track={track} 
                          key={track.id} 
                          onAdd={this.props.onAdd} 
                          onRemove={this.props.onRemove}
                          isRemoval={this.props.isRemoval} 
                          onPlay={this.playPreview}/>
            }
          )
        }
        {this.state.playing && <AudioPreview previewURL={this.tracks.track.preview}/> }
      </div>
    )
  }
}

export default TrackList; 
