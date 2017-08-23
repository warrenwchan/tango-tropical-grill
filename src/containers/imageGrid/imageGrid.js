import React, { Component } from 'react';
import styles from './styles.scss';

import FaveImage from '../../components/faveImage/'
import FaveData from '../../data/index'

class ImageGrid extends Component {
  render() {
    return (
      <div>
        {FaveData.favorites.map((fave, i) => {
          return <FaveImage
            key={i}
            name={fave.name}
            number={fave.number}
            image={fave.image}
          />
        })}
      </div>
    );
  }
}

export default ImageGrid;
