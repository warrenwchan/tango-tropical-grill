import React, { Component } from 'react';
import styles from './styles.scss';

import faveS2 from '../../assets/favorites/s2-min.jpg'
import fave13 from '../../assets/favorites/13-min.jpg'
import fave16 from '../../assets/favorites/16-min.jpg'
import fave21 from '../../assets/favorites/21-min.jpg'
import fave24 from '../../assets/favorites/24-min.jpg'
import fave31 from '../../assets/favorites/31-min.jpg'
import fave40 from '../../assets/favorites/40-min.jpg'
import fave42 from '../../assets/favorites/42-min.jpg'
import fave57 from '../../assets/favorites/57-min.jpg'
import fave75 from '../../assets/favorites/75-min.jpg'

class faveImage extends Component {
  render() {

    const faveBg = {
      backgroundImage: 'linear-gradient(135deg, rgba(26,26,26,0.5) 0%,rgba(26,26,26,0.5) 100%), url('+ this.props.image + ')',
      backgroundPosition: 'center',
    }

    return (
      <div className="faveImage" style={faveBg}>
        <p className="dishNumber" >{this.props.number}</p>
        <p className="dishName">{this.props.name}</p>
      </div>
    );
  }
}

export default faveImage;
