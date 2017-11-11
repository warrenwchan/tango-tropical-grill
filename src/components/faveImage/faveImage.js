import React, { Component } from 'react';
import styles from './styles.scss';

class faveImage extends Component {
  render() {

    const faveBg = {
      backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 67%,rgba(0,0,0,0.65) 100%), url('+ this.props.image + ')',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }

    return (
      <div className="faveImageContainer">
        <div className="faveCard">
          <div className="faveImage" style={faveBg}></div>
          <div className="faveInfo">
            <p className="dishName">{this.props.name}</p>
            <p className="dishNumber" >{this.props.number}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default faveImage;
