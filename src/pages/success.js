import React, {Component} from 'react';
import Link from "gatsby-link"
import styles from './styles.scss';

import Logo from '../assets/tangologo.svg';

class Success extends Component {
  render() {
    return (
      <div className="successBg">
        <div className="successContentContain">
          <div className="successLogoContainer">
            <div className="successLogo">
              <img src={Logo}/>
              <div className="logoShadow"></div>
            </div>
            <div className="successText">
              <h1>😊 Thank you 😊</h1>
              <h2>Enjoy your meal!</h2>
            </div>
          </div>
          <div className="backToHomeLink">
            <p><Link to="/">Back to 🏠</Link></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Success;
