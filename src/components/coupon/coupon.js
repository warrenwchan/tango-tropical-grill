import React, { Component } from 'react';
import styles from './styles.scss';

import special1 from './../../assets/tango-banner.png';
import special2 from './../../assets/special2-min.jpg';
import special3 from './../../assets/d-ng-tri-66959-min.jpg';
import special4 from './../../assets/frank-mckenna-127336-min.jpg';
import special5 from './../../assets/christopher-flowers-234182-min.jpg';

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
    console.log(this.state.toggleForm)
  }

  render() {
    const couponBG = {
      backgroundImage: 'linear-gradient(135deg, rgba(26,26,26,0.5) 0%,rgba(26,26,26,0.5) 100%), url('+ this.props.image + ')',
    }

    return(
      <div className="couponContainer">
        <div className="elements" style={couponBG}>
          <div className="elementContent">
            <form name="coupon" action="thank-you" data-netlify="true">
              {this.state.toggleForm === true ? (
                <div id="specialsForm">
                    <p>
                      <label>Your Name: <input type="text" name="name"/></label>
                    </p>
                    <p>
                      <label>Your Email: <input type="email" name="email"/></label>
                    </p>
                    <p>
                      <label className="couponNumberValue" ><input type="coupon" name="coupon" defaultValue={this.props.title}/></label>
                    </p>
                    <div className="buttonContain">
                      <button className="couponBtn a" type="submit">Send</button>
                      <button className="couponBtn b" type="button" onClick={this.onClick.bind(this)}>Cancel</button>
                    </div>
                </div>
              ):(
                <div id="specialLabel" onClick={this.onClick.bind(this)}>
                  <h3 className="couponTitle">{this.props.title}</h3>
                  <p className="couponDescription">{this.props.desc}</p>
                  <p className="couponAcception">*{this.props.acpt}*</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Coupon;
