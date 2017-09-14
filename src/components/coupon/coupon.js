import React, { Component } from 'react';
import styles from './styles.scss';

import special1 from './../../assets/tango-banner.png';
import special2 from './../../assets/special2-min.jpg';
import special3 from './../../assets/d-ng-tri-66959-min.jpg';
import special4 from './../../assets/frank-mckenna-127336-min.jpg';
import special5 from './../../assets/christopher-flowers-234182-min.jpg';

import SpecialForm from '../specialForm/';

class Coupon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleForm: false
    };
  }

  onClick(e){
    e.preventDefault();
    this.setState({toggleForm: !this.state.toggleForm})
  }

  render() {
    const couponBG = {
      backgroundImage: 'linear-gradient(180deg, rgba(26,26,26,0.5) 0%,rgba(26,26,26,0.8) 100%), url('+ this.props.image + ')',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }

    return(
      <div className="couponContainer">
        <div className="elements" style={couponBG}>
          <div className="elementContent">
            {this.state.toggleForm === true ? (
              null
            ):(
              <div className="specialContainer">
                <div className="specialHitpoint" onClick={this.onClick.bind(this)}>
                  <div className="specialContent">
                    <h3 className="couponTitle">{this.props.title}</h3>
                    <p className="couponDescription">{this.props.desc}</p>
                    <p className="couponAcception">*{this.props.acpt}*</p>
                  </div>
                </div>
              </div>
            )}
            <div className="specialContainer">
              <div className="specialHitpoint">
                <SpecialForm
                  onClick={this.onClick.bind(this)}
                  title={this.props.title}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Coupon;
