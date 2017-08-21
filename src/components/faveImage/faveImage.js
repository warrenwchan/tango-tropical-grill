import React, { Component } from 'react';
import styles from './styles.scss';

class faveImage extends Component {
  render() {

    const faveBg = {
      backgroundImage: 'linear-gradient(135deg, rgba(26,26,26,0.7) 0%,rgba(26,26,26,0.7) 100%), url('+ this.props.image + ')',
      backgroundPosition: 'center',
      backgroundSize: '400%'
    }

    return (
      <div className={this.props.imgSize} style={faveBg}>
        <div className="imgTextContain">
          <p className="dishName">{this.props.name}</p>
          <p className="dishNumber" >{this.props.number}</p>
        </div>
      </div>
    );
  }
}

export default faveImage;
