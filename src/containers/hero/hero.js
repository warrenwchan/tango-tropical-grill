import React, { Component } from 'react';
import client from '../../data/contentful'
import FontAwesome from 'react-fontawesome'

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
    this.getImage('tangoBanner')
  }

  getImage() {
    client.getAsset('6FCIxd7wyskIOQ6iCKWCw2')
    .then(asset => {
      const bannerURL = asset.fields.file.url
      this.setState({tangoBanner: bannerURL})
    })
    .catch(console.error)
  }

  render() {
    const bannerBG = {
      backgroundImage:
      `linear-gradient(180deg, rgba(26,26,26,0.5) 0%,rgba(26,26,26,0.8) 100%), url(${this.state.tangoBanner}) `,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
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
