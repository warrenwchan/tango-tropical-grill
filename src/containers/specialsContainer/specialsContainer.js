import React, { Component } from 'react';
import client from  '../../data/contentful';
import styles from './styles.scss';

import Section from '../../components/section/';
import Coupon from '../../components/coupon';

class SpecialsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coupons: []
    }
    this.getCoupons = this.getCoupons.bind(this);
  }

  componentDidMount() {
    this.getCoupons()
  }

  getCoupons() {
    client.getEntries({content_type: 'coupon', order: 'sys.createdAt'}).then(entries => {
      entries.items.map((entry, i) => {
        const coupon = entry.fields
        let joined = this.state.coupons.concat(coupon);
        this.setState({coupons: joined})
      })
    })
  }

  render() {
    return (
      <Section
        id="specials"
        title="Specials"
        icon={this.props.icon}
      >
        <div className="comingSoon">
          <h2>Hang tight, coming Soon!</h2>
        </div>
        <div className="couponList">
          {this.state.coupons.map((coupon, i) => {
            return <Coupon
              key={i}
              title={coupon.couponTitle}
              desc={coupon.couponDescription}
              acpt={coupon.couponAcceptions}
              image={coupon.couponImage.fields.file.url}
            />
          })}
        </div>
      </Section>
    );
  }
}

export default SpecialsContainer;
