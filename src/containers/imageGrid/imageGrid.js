import React, { Component } from 'react';
import styles from './styles.scss';

import FaveImage from '../../components/faveImage/'
import FaveData from '../../data/index'

import Stage from 'react-stage';

class ImageGrid extends Component {
  render() {

    const styles = {
      boxSizing: 'border-box',
      display: 'block',
      width: '100%',
      padding: '100px',
      textAlign: 'center'
    };

    const settings = {
      arrows: false,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      speed: 500
    };

    return (
      <div className="imgGrid">
        <Stage {...settings}>
          {FaveData.favorites.map((fave, i) => {
            return <FaveImage
              key={i}
              name={fave.name}
              number={fave.number}
              image={fave.image}
            />
          })}
        </Stage>
      </div>
    );
  }
}

export default ImageGrid;
