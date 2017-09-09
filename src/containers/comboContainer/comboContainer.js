import React, { Component } from 'react';
import styles from './styles.scss';

import Section from '../../components/section/';
import Combo from '../../components/combo/';

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
            main="Sub from S1 - S"
            sides="2 Sring Rolls or Yam Fries"
            price="$10"
          />
          <Combo
            title="Combo B"
            main="Bun 21, 26 or 28"
            sides="2 Gyozas or Yam Fries"
            price="$14"
          />
          <Combo
            title="Combo C"
            main="Stir-Fry 29, 32, 38"
            sides="2 Sring Rolls or Yam Fries"
            price="$15"
          />
        </div>
      </Section>
    );
  }
}

export default ComboContainer;
