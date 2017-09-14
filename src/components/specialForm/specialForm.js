import React, {Component} from 'react';
import styles from './styles.scss';

class SpecialForm extends Component {
  state = {  }
  render() {
    console.log(this.props.title)
    return (
      <div id="specialsForm">
        <form name="coupon" action="../../pages/received/" data-netlify="true">
          <p>
            <label>
              Your Name:
              <input type="text" name="name"/>
            </label>
          </p>
          <p>
            <label>
              Your Email:
              <input type="email" name="email"/>
            </label>
          </p>
          <p>
            <label className="couponNumberValue">
              <input type="text" name="coupon" value={this.props.title}/>
            </label>
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
