import React, { Component } from 'react';
import styles from './styles.scss';

import FaveImage from '../../components/faveImage/'
import FaveData from '../../data/index'

class ImageGrid extends Component {
  render() {
    return (
      <div className="imgGrid">
        {FaveData.favorites.map((fave, i) => {
          return <FaveImage
            key={i}
            image={fave.image}
            name={fave.name}
            number={fave.number}
            imgSize={fave.size}
          />
        })}
      </div>
    );
  }
}

export default ImageGrid;
