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
      `linear-gradient(60deg, rgba(164,57,49,0.25) 0%,rgba(31,28,24,0.8) 100%),
       url(${this.state.tangoBanner}) `
    }

    return (
      <div className="heroImageContainer">
        <NavBar />
        <div className="heroBackgroundImage" style={bannerBG}>
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
    );
  }
}

export default Hero;
