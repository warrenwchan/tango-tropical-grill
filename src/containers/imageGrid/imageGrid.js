import React, { Component } from 'react';
import styles from './styles.scss';

import FaveImage from '../../components/faveImage/'
import pic from '../../assets/AAEAAQAAAAAAAAKHAAAAJGUwY2YzMWNhLTNjYmItNGVkZC1hMWViLTAxOGQ3ZTBkYjBmZA.jpg'
import s2 from '../../assets/favorites/s2-min.jpg'
import fave21 from '../../assets/favorites/21-min.jpg'
import fave24 from '../../assets/favorites/24-min.jpg'
import fave42 from '../../assets/favorites/42-min.jpg'
import fave57 from '../../assets/favorites/57-min.jpg'
import fave75 from '../../assets/favorites/75-min.jpg'
import fave16 from '../../assets/favorites/16-min.jpg'

class ImageGrid extends Component {
  render() {
    return (
      <div className="imgGrid">
        <FaveImage
          imgSize="small-Img"
          name="Sate Beef Sub"
          number="S2"
          image={s2}
        />
        <FaveImage
          imgSize="small-Img"
          name="Charbroiled Pork & Spring Roll"
          number="21"
          image={fave21}
        />
        <FaveImage
          imgSize="small-Img"
          name="Chef's Special"
          number="24"
          image={fave24}
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
          image={fave75}
        />
        <FaveImage
          imgSize="small-Img"
          name="Tropical Thai Chicken Sir Fried"
          number="35"
          image={pic}
        />
        <FaveImage
          imgSize="small-Img"
          name="Tropical Chicken Salad"
          number="16A"
          image={fave16}
        />
        <FaveImage
          imgSize="small-Img"
          name="Tropical Wok-Fried Rice"
          number="42"
          image={fave42}
        />
        <FaveImage
          imgSize="small-Img"
          name="Beef Saté Rice Noodle Soup"
          number="57"
          image={fave57}
        />
      </div>
    );
  }
}

export default ImageGrid;
