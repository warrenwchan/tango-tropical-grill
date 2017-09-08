import React, { Component } from 'react';
import styles from './styles.scss';

import NavBar from '../navbar/';
import FontAwesome from 'react-fontawesome'

const Hero = () => (
  <div className="heroImageContainer">
    <NavBar />
    <div className="heroBackgroundImage">
      <div className="heroTitleContain" >
        <p className="heroTitle">Tango</p>
        <p className="heroSubTitle" >Tropical Grill <br/> Vietnamese & Thai Cuisine </p>
        <a className="heroButton" data-scroll href="#contact">Contact</a>
      </div>
    </div>
    <div className="heroJump">
      <a href="#specials">
        <FontAwesome
          name="angle-down"
        />
      </a>
    </div>
  </div>
)

export default Hero;
