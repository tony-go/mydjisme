import React from 'react';
import ReactDOM from 'react-dom';
import './Track.css'

class Track extends React.Component {

  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
    this.addRemove = this.addRemove.bind(this);
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

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3 input={this.props.onChange} >{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        {this.renderAction()}
      </div>
    )
  }
}

export default Track; 