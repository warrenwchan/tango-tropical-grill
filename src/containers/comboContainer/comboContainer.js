import React, { Component } from 'react';
import styles from './styles.scss';

import Section from '../../components/section/';
import Combo from '../../components/combo/';

import Sub from '../../assets/favorites/s2-min.jpg';
import Bun from '../../assets/favorites/24-min.jpg';
import Stir from '../../assets/favorites/40-min.jpg';

class ComboContainer extends Component {
  render() {
    return (
      <Section
        id="combos"
        title="Combos"
        icon={this.props.icon}
        subText="Our lunch combos are easy as ABC"
      >
        <div className="comboContainer">
          <Combo
            title="Combo A"
            main="Sub from S1 - S7"
            sides="2 Sring Rolls or Yam Fries"
            price="$10"
            image={Sub}
          />
          <Combo
            title="Combo B"
            main="Bun 21, 26 or 28"
            sides="2 Gyozas or Yam Fries"
            price="$14"
            image={Bun}
          />
          <Combo
            title="Combo C"
            main="Stir-Fry 29, 32 or 38"
            sides="2 Sring Rolls or Yam Fries"
            price="$15"
            image={Stir}
          />
        </div>
      </Section>
    );
  }
}

export default ComboContainer;
