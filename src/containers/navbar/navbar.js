import React, { Component } from 'react';
import Link from 'gatsby-link';
import styles from './styles.scss';

import logo from './../../assets/tangologo.svg';

const NavBar = () => (
  <div className="navBar">
    <div className="mobileLogoContain">
      <img className="mobileLogo" src={logo} alt="Tango Logo"/>
    </div>
    <div className="navContain">
      <div>
        <Link to="/">
          <img className="navLogo" src={logo} alt="Tango Logo"/>
        </Link>
      </div>
      <span className="navItems">
        <a className="navItem" href="#specials">Specials</a>
        <a className="navItem" href="#combos">Combos</a>
        <a className="navItem" href="#favorites">Favorites</a>
        <a className="navItem" href="#contact">Contact</a>
      </span>
    </div>
  </div>
);

export default NavBar;
