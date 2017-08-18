import React, { Component } from 'react';
import styles from './styles.scss';

import Section from './../../components/section';
import ContactInfo from './../../components/contactInfo';

class FooterContainer extends Component {
  render() {

    const MY_API_KEY = "AIzaSyBMm02FIRXk_KnriZ_9w2rdWN7VI25vN0Y"

    return (
      <div className="footerContainerBackground" id="contact">
        <div className="footerContainer">
          <div className="footerMenu" >
            <h2>Menu</h2>
            <div className="menuItems">
              <a href="#specials"><p>Specials</p></a>
              <a href="#favorites"><p>Favorites</p></a>
              <a href="#contact"><p>Contact</p></a>
            </div>
          </div>

          <div className="contactInfoContainer" >
            <h2>Contact</h2>
            <ContactInfo
              contactIcon="phone"
              contactLink="tel:403=275-8181"
              contactInfo="403-275-8181"
            />
            <ContactInfo
              contactIcon="map-marker"
              contactLink="http://maps.google.com/?q=14 5010 4th St NE, T2K 5X8 Calgary"
              contactInfo="14 5010 4th St NE, T2K 5X8 Calgary"
            />
            <ContactInfo
              contactIcon="facebook"
              contactLink="https://www.facebook.com/TangoVietnameseRestaurant/"
              contactInfo="Facebook Page"
            />
            <ContactInfo
              contactIcon="instagram"
              contactLink="https://www.instagram.com/tangotropical/"
              contactInfo="Instagram"
            />
          </div>

          <div className="tradeMark">
            <p>Tango 2017 ©</p>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterContainer;
