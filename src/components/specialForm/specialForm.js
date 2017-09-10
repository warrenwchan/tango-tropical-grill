import React, {Component} from 'react';
import styles from './styles.scss';

class SpecialForm extends Component {
  state = {  }
  render() {
    return (
      <div id="specialsForm">
        <form name="coupon" action="thank-you" data-netlify="true">
          <p>
            <label>Your Name: <input type="text" name="name"/></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email"/></label>
          </p>
          <p>
            <label className="couponNumberValue" ><input type="coupon" name="coupon" value={this.props.key}/></label>
          </p>
          <div className="buttonContain">
            <button className="couponBtn a" type="submit">Send</button>
            <button className="couponBtn b" type="button" onClick={this.props.onClick}>Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SpecialForm;
