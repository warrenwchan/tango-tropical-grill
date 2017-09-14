import React, { Component } from 'react';
import styles from './styles.scss';

import Section from '../../components/section/';
import Coupon from '../../components/coupon';

import SpecialsData from '../../data/index'


class SpecialsContainer extends Component {
  render() {
    return (
      <Section
        id="specials"
        title="Specials"
        icon={this.props.icon}
        subText="We know you’re into deals, so try these out."
      >
        <div className="couponList">
          {SpecialsData.specials.map((special, i) => {
            return <Coupon
              key={i}
              title={special.title}
              desc={special.desc}
              size={special.size}
              acpt={special.acpt}
              image={special.image}
            />
          })}
        </div>
      </Section>
    );
  }
}

export default SpecialsContainer;
