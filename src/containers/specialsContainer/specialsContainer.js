import React, { Component } from 'react';
import styles from './styles.scss';

import Section from '../../components/section/';
import Coupon from '../../components/coupon';

import special1 from './../../assets/tango-banner.png';
import special2 from './../../assets/special2-min.jpg';
import special3 from './../../assets/d-ng-tri-66959-min.jpg';
import special4 from './../../assets/frank-mckenna-127336-min.jpg';
import special5 from './../../assets/christopher-flowers-234182-min.jpg';


class SpecialsContainer extends Component {
  render() {
    return (
      <Section
        id="specials"
        title="Specials"
        icon={this.props.icon}
        subText="We know you’re into deals, so try these out."
      >
        <div className="couponContain">
          <Coupon
            id="1"
            size="big"
            title="Suns out Búns out"
            desc="2pm - 5pm Get a free soda with a purchase of a bún for $10.95"
            acpt="Applies to #19 - #26, #28"

            image={special1}
          />
          <Coupon
            id="2"
            size="small"
            title="“Third Wheel Special”"
            desc="Buy 2 Pho noodle bowls, Get 1 bowl free!"
            acpt="Applies to #60 - #67"

            image={special2}
          />
          <Coupon
            id="3"
            size="small"
            title="“Tea Time Special”"
            desc="Free spring roll or free coke with purchase of main dish from 2pm - 5pm"
            acpt="Excludes #1 - #11 and all subs"

            image={special3}
          />
          <Coupon
            id="4"
            size="small"
            title="$3 Meal size up"
            desc="Add $3 to main dish for bubble tea or vietnamese ice coffee."
            acpt="Excludes #1 - #11 and all subs"

            image={special4}
          />
          <Coupon
            id="5"
            size="small"
            title="$4 Meal size up"
            desc="Add $4 to main dish for 4 Gyoza or Yam fries."
            acpt="Excludes #1 - #11 and all subs"

            image={special5}
          />
        </div>
      </Section>
    );
  }
}

export default SpecialsContainer;
