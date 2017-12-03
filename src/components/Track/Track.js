import React from 'react';
import ReactDOM from 'react-dom';
import './Track.css'

// function AudioPreview(props) {
//   return (
//     <audio src={props.previewURL} autoPlay>
//       Preview
//     </audio>
//   )
// }

class Track extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      playing : false
    }

    this.addTrack = this.addTrack.bind(this);
    this.addRemove = this.addRemove.bind(this);
    //this.playPreview = this.playPreview.bind(this);
  }

  renderAction() {
    if (this.props.isRemoval) {
      return (<a className="Track-action" onClick={this.addRemove} >-</a>)
    } else {
      return (<a className="Track-action" onClick={this.addTrack} >+</a>)
    }
  }

  addTrack() {
    this.props.onAdd(this.props.track)
  }
  
  addRemove() {
    this.props.onRemove(this.props.track)
  }

  // playPreview(event) {
  //   this.setState({playing : true})
  // }
  

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album} 
            {this.props.track.preview &&
              ( <a onClick={this.props.onPlay}  > + Preview</a> )
            }
          </p>
        </div>
        {this.renderAction()}
        {/* {this.state.playing && <AudioPreview previewURL={this.props.track.preview}/>  } */}
      </div>
    )
  }
}

export default Track; 