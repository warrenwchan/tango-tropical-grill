import React, { Component } from 'react';
import firebase from '../../data/firebase.js'
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

  getImage(image) {
    let storage = firebase.storage().ref()
    storage.child(`images/${image}.png`).getDownloadURL().then((url) => {
      this.state[image] = url
      this.setState(this.state)
    })
  }

  render() {
    const bannerBG = {
      backgroundImage:
      `linear-gradient(180deg, rgba(26,26,26,0.5) 0%,rgba(26,26,26,0.8) 100%), url(${this.state.tangoBanner}) `,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
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
