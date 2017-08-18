import React, { Component } from 'react';
import styles from './styles.scss';

// import Section from '../../components/Section';
// import Coupon from '../../components/Coupon'


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
            size="big"
            title="Suns out Búns out"
            desc="2pm - 5pm Get a free soda with a purchase of a bún for $10.95"
            acpt="Applies to #19 - #26, #28"
            onClick={() => (prompt("Coupon 1"))}
            image={this.props.image}
          />
          <Coupon
            size="small"
            title="“Third Wheel Special”"
            desc="Buy 2 Pho noodle bowls, Get 1 bowl free!"
            acpt="Applies to #60 - #67"
            onClick={() => (prompt("Coupon 2"))}
          />
          <Coupon
            size="small"
            title="“Tea Time Special”"
            desc="Free spring roll or free coke with purchase of main dish from 2pm - 5pm"
            acpt="Excludes #1 - #11 and all subs"
            onClick={() => (prompt("Coupon 3"))}
          />
          <Coupon
            size="small"
            title="$3 Meal size up"
            desc="Add $3 to main dish for bubble tea or vietnamese ice coffee."
            acpt="Excludes #1 - #11 and all subs"
            onClick={() => (prompt("Coupon 4"))}
          />
          <Coupon
            size="small"
            title="$4 Meal size up"
            desc="Add $4 to main dish for 4 Gyoza or Yam fries."
            acpt="Excludes #1 - #11 and all subs"
            onClick={() => (prompt("Coupon 5"))}
          />
        </div>
      </Section>
    );
  }
}

export default SpecialsContainer;
