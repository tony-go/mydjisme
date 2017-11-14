import React from 'react';
import ReactDOM from 'react-dom';
import './Track.css'

class Track extends React.Component {

  // renderAction() {
  //   if (isRemoval === true) {
  //     return "-"
  //   } else {
  //     return "+"
  //   }
  // }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>Viens danser</h3>
          <p>Gilbert M | L'album qui tue</p>
        </div>
        <a className="Track-action">+</a>
      </div>
    )
  }
}

export default Track; 