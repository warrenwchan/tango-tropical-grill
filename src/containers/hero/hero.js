import React, { Component } from 'react';
import client from '../../data/contentful';
import FontAwesome from 'react-fontawesome';

import styles from './styles.scss';
import NavBar from '../navbar/';

class Hero extends Component {
  constructor() {
    super()
    this.state = {
      tangoBanner: ''
    }
  }

  componentDidMount() {
    this.getImage('6FCIxd7wyskIOQ6iCKWCw2')
  }

  getImage(bannerId) {
    client.getAsset(bannerId)
    .then(asset => {
      const bannerURL = asset.fields.file.url
      this.setState({tangoBanner: bannerURL})
    })
    .catch(console.error)
  }

  render() {
    const bannerBG = {
      backgroundImage:
      `linear-gradient(135deg, rgba(26, 26, 26, 0.5) 0%,rgba(26, 26, 26, 0.8) 100%), url(${this.state.tangoBanner}) `
    }

    return (
      <div className="heroImageContainer">
        <NavBar />
        <div className="heroBackgroundImage" style={bannerBG}>
          <div className="heroTitleContain" >
            <p className="heroTitle">Tango</p>
            <p className="heroSubTitle"> Tropical Grill Vietnamese & Thai Cuisine </p>
            <a className="heroButton" data-scroll href="#contact">Contact</a>
          </div>
        </div>
        <div className="heroJump">
          <a style={{color:'inherit'}} href="#specials">
            <FontAwesome name="angle-down" size="3x"/>
          </a>
        </div>
      </div>
    );
  }
}

export default Hero;
