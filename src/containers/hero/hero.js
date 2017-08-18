import React, { Component } from 'react';
import styles from './styles.scss';

const Hero = () => (
  <div className="heroImageContainer">
    <div className="heroTitleContain" >
      <p className="heroTitle">Tango</p>
      <p className="heroSubTitle" >Tropical Grill <br/> Vietnamese & Thai Cuisine </p>
      <a className="heroButton" data-scroll href="#contact">Contact</a>
    </div>
  </div>
)

export default Hero;
