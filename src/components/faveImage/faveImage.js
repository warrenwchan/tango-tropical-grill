import React, { Component } from 'react';
import styles from './styles.scss';

class faveImage extends Component {
  render() {

    const faveBg = {
      backgroundImage: 'linear-gradient(135deg, rgba(26,26,26,0.1) 0%,rgba(26,26,26,0.1) 100%), url('+ this.props.image + ')',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }

    return (
      <div className="faveImageContainer" style={faveBg}>
        <div className="faveImage">
          <p className="dishNumber" >{this.props.number}</p>
          <p className="dishName">{this.props.name}</p>
        </div>
      </div>
    );
  }
}

export default faveImage;
