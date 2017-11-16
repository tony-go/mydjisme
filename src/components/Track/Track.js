import React from 'react';
import ReactDOM from 'react-dom';
import './Track.css'

class Track extends React.Component {

  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
  }

  // renderAction() {
  //   if (isRemoval === true) {
  //     return "-"
  //   } else {
  //     return "+"
  //   }
  // }

  addTrack() {
    this.props.onAdd(this.props.track)
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <a className="Track-action" onClick={this.addTrack} >+</a>
      </div>
    )
  }
}

export default Track; 