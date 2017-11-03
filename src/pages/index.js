import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import { Helmet } from "react-helmet"
import { goToTop } from 'react-scrollable-anchor'

import Hero from '../containers/hero/'
import SpecialsContainer from '../containers/specialsContainer'
import ComboContainer from '../containers/comboContainer/'
import FavoriteContainer from '../containers/favoriteContainer'
import MapContainer from '../containers/mapContainer/'
import FooterContainer from '../containers/footerContainer'
import SectionSeparator from '../components/sectionSeparator'

import scent from '../assets/scent.svg';
import favicon from '../favicon.png';

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Tango Tropical Grill</title>
          <meta charSet="utf-8"/>
          <meta name="description" content="Tango Tropical Grill is a casual dining restaurant that specializes in Thai and Vietnamese food located in Calgary, Alberta."/>
          <meta name="keywords" content="Casual restaurant offering a mix of Vietnamese and Thai dishes, including pho, along with a bar"/>
          <meta name="author" content="Warren Chan"/>
          <link rel="shortcut icon" type="image/png" href={favicon} />
        </Helmet>
        <Hero />
        <SpecialsContainer
          icon={scent}
        />
        <ComboContainer
          icon={scent}
        />
        <FavoriteContainer
          icon={scent}
        />
        <SectionSeparator/>
        <MapContainer />
        <FooterContainer />
      </div>
    )
  }
}
