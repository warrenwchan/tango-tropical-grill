import React, {Component} from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

class SpecialForm extends Component {
  render() {
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
              <input type="text" name="coupon" defaultValue={this.props.title}/>
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

SpecialForm.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
}

export default SpecialForm;
