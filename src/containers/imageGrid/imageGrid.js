import React, { Component } from 'react';
import styles from './styles.scss';

import FaveImage from '../../components/faveImage/'
import pic from '../../assets/AAEAAQAAAAAAAAKHAAAAJGUwY2YzMWNhLTNjYmItNGVkZC1hMWViLTAxOGQ3ZTBkYjBmZA.jpg'

class ImageGrid extends Component {
  render() {
    return (
      <div className="imgGrid">
        <FaveImage
          imgSize="small-Img"
          name="Sate Beef Sub"
          number="S2"
          image={pic}
        />
        <FaveImage
          imgSize="small-Img"
          name="Charbroiled Pork & Spring Roll"
          number="21"
          image={pic}
        />
        <FaveImage
          imgSize="small-Img"
          name="Chef's Special"
          number="24"
          image={pic}
        />
        <FaveImage
          imgSize="small-Img"
          name="Pad Thai"
          number="33"
          image={pic}
        />
        <FaveImage
          imgSize="big-Img"
          name="Grilled Lemongrass Chicken Sate Chicken & Spring Rolls"
          number="26"
          image={pic}
        />
        <FaveImage
          imgSize="big-Img"
          name="2 Eggs & 2 Charbroiled Pork Chops"
          number="75"
          image={pic}
        />
        <FaveImage
          imgSize="small-Img"
          name="Tropical Thai Chicken Sir Fried"
          number="35"
          image={pic}
        />
        <FaveImage
          imgSize="small-Img"
          name="Thai Green Curry"
          number="36"
          image={pic}
        />
        <FaveImage
          imgSize="small-Img"
          name="Tropical Wok-Fried Rice"
          number="42"
          image={pic}
        />
        <FaveImage
          imgSize="small-Img"
          name="Beef Saté Rice Noodle Soup"
          number="57"
          image={pic}
        />
      </div>
    );
  }
}

export default ImageGrid;
