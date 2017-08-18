import React, { Component } from 'react';
import styles from './styles.scss';

class Coupon extends Component {
  render() {

    const couponBG = {
      backgroundImage: 'linear-gradient(135deg, rgba(26,26,26,0.5) 0%,rgba(26,26,26,0.5) 100%), url('+ this.props.image + ')',
    }

    return(
      <a className={this.props.size} style={couponBG} onClick={this.props.onClick}>
        <h3 className="couponTitle">{this.props.title}</h3>
        <p className="couponDescription">{this.props.desc}</p>
        <p className="couponAcception">*{this.props.acpt}*</p>
        <div className="cornerBox"></div>
      </a>
    )
  }
}

export default Coupon;
