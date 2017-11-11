import React, { Component } from 'react';
import styles from './styles.scss';

import FaveImage from '../../components/faveImage/'

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

    let settings = {
      arrows: true,
      autoplay: false,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      slidesToShow: 1,
      speed: 800,
      swipe: true,
    };

    let faves = this.props.favesArr

    return (
      <div className="imgGrid">
        <Stage {...settings}>
          {faves.map((fave, i) => {
            return <FaveImage
              key={i}
              name={fave.favoriteDishName}
              number={fave.favoriteDishNumber}
              image={fave.favoriteDishImage.fields.file.url}
            />
          })}
        </Stage>
      </div>
    );
  }
}

export default ImageGrid;
