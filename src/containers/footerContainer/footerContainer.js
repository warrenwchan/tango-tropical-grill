import React, { Component } from 'react';
import styles from './styles.scss';

import Section from './../../components/section';
import ContactInfo from './../../components/contactInfo';

class FooterContainer extends Component {
  render() {

    return (
      <div className="footerContainerBackground" id="contact">
        <div className="footerContainer">
          <div className="contactInfoContainer" >
            <h2>Catch Us During</h2>
            <div className="contactInfoItems">
              <ContactInfo
                contactInfo="Monday: 11am - 9pm"
              />
              <ContactInfo
                contactInfo="Tuesday: 11am - 9pm"
              />
              <ContactInfo
                contactInfo="Wednesday: 11am - 9pm"
              />
              <ContactInfo
                contactInfo="Thursday: 11am - 9pm"
              />
              <ContactInfo
                contactInfo="Friday: 11am - 10pm"
              />
              <ContactInfo
                contactInfo="Saturday: 11am - 10pm"
              />
              <ContactInfo
                contactInfo="Sunday: Closed"
              />
            </div>
          </div>
          <div className="contactInfoContainer" >
            <h2>Contact</h2>
            <div className="contactInfoItems">
              <ContactInfo
                contactIcon="phone"
                contactLink="tel:403=275-8181"
                contactInfo="403-275-8181"
                target="_blank"
              />
              <ContactInfo
                contactIcon="facebook"
                contactLink="https://www.facebook.com/TangoVietThai/?ref=br_rs"
                contactInfo="Facebook Page"
                target="_blank"
              />
              <ContactInfo
                contactIcon="instagram"
                contactLink="https://www.instagram.com/tangotropical/"
                contactInfo="Instagram"
                target="_blank"
              />
              <ContactInfo
                contactIcon="map-marker"
                contactLink="http://maps.google.com/?q=14 5010 4th St NE, T2K 5X8 Calgary"
                contactInfo="14 5010 4th St NE, T2K 5X8 Calgary"
                target="_blank"
              />
            </div>
          </div>
          <div className="contactInfoContainer" >
            <h2>Menu</h2>
            <div className="contactInfoItems">
              <ContactInfo
                contactLink="#specials"
                contactInfo="Specials"
              />
              <ContactInfo
                contactLink="#combos"
                contactInfo="Combos"
              />
              <ContactInfo
                contactLink="#favorites"
                contactInfo="Favorties"
              />
              <ContactInfo
                contactLink="#location"
                contactInfo="Location"
              />
              <ContactInfo
                contactLink="#contact"
                contactInfo="Contact"
              />
            </div>
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
