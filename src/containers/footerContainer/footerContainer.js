import React, { Component } from 'react';
import styles from './styles.scss';

import Section from './../../components/section';
import ContactInfo from './../../components/contactInfo';

class FooterContainer extends Component {
  render() {

    return (
      <div className="footerContainerBackground" id="contact">
        <div className="footerContainer">
          <div className="footerMenu" >
            <h2>Menu</h2>
            <div className="menuItems">
              <a href="#specials"><p>Specials</p></a>
              <a href="#contact"><p>Combos</p></a>
              <a href="#favorites"><p>Favorites</p></a>
              <a href="#contact"><p>Contact</p></a>
            </div>
          </div>
          <div className="contactInfoContainer" >
            <h2>Contact</h2>
            <div className="contactInfoItems">
              <ContactInfo
                contactIcon="phone"
                contactLink="tel:403=275-8181"
                contactInfo="403-275-8181"
              />
              <ContactInfo
                contactIcon="facebook"
                contactLink="https://www.facebook.com/TangoVietThai/?ref=br_rs"
                contactInfo="Facebook Page"
              />
              <ContactInfo
                contactIcon="instagram"
                contactLink="https://www.instagram.com/tangotropical/"
                contactInfo="Instagram"
              />
              <ContactInfo
                contactIcon="map-marker"
                contactLink="http://maps.google.com/?q=14 5010 4th St NE, T2K 5X8 Calgary"
                contactInfo="14 5010 4th St NE, T2K 5X8 Calgary"
              />
            </div>
          </div>
          <div className="mapContainer">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.6398667018975!2d-114.0552372836882!3d51.096653479569824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537165a40317cd99%3A0x5cc67c7f19e74f06!2sTango+Tropical+Grill!5e0!3m2!1sen!2sca!4v1505618464968" width="100%" height="300" frameborder="0" allowfullscreen></iframe>
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
