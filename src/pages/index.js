import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"

import Hero from '../containers/hero/'
import SpecialsContainer from '../containers/specialsContainer'
import FavoriteContainer from '../containers/favoriteContainer'
import FooterContainer from '../containers/footerContainer'
import SectionSeparator from '../components/sectionSeparator'

import scent from '../assets/scent.svg';

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <div>
        <Helmet
          title="Tango Tropical Grill"
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" },
          ]}
        />
        <Hero />
        <SpecialsContainer
          icon={scent}
        />
        <SectionSeparator/>
        <FavoriteContainer
          icon={scent}
        />
        <FooterContainer />
      </div>
    )
  }
}
