import React, { Component } from 'react';
import styles from './styles.scss';

class Coupon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleForm: false
    };
  }
  render() {

    const couponBG = {
      backgroundImage: 'linear-gradient(135deg, rgba(26,26,26,0.5) 0%,rgba(26,26,26,0.5) 100%), url('+ this.props.image + ')',
    }

    const changeState = () => {
      if(this.state.toggleForm != true ){
        this.setState(previousState => {
          return { toggleForm: true };
        });
      } else {
        this.setState(previousState => {
          return { toggleForm: false };
        });
      }
      console.log(this.state.toggleForm)
    }

    const toggleForm = () => {
      var e = document.getElementById("specialLabel");
      var e2 = document.getElementById("specialsForm");
      if(this.state.toggleForm != true) {
         e.style.display = 'block';
         e2.style.display = 'none';
      }
      else {
         e.style.display = 'none';
         e2.style.display = 'block';
      }
    }

    const trigger = () => {
      changeState();
      toggleForm();
    }

    return(
      <a id={this.props.id} className={this.props.size} style={couponBG}>
        <div id="specialLabel">
          <h3 className="couponTitle">{this.props.title}</h3>
          <p className="couponDescription">{this.props.desc}</p>
          <p className="couponAcception">*{this.props.acpt}*</p>
          <button className="couponBtn" type="button" onClick={() => (trigger())} >Claim</button>
        </div>
        <div id="specialsForm">
          <form name="coupon" action="thank-you" data-netlify="true">
            <p>
              <label>Your Name: <input type="text" name="name"/></label>
            </p>
            <p>
              <label>Your Email: <input type="email" name="email"/></label>
            </p>
            <p>
              <button className="couponBtn" type="submit">Send</button>
              <button className="couponBtn" type="button" onClick={() => (trigger())}>Cancel</button>
            </p>
          </form>
        </div>
      </a>
    )
  }
}

export default Coupon;
