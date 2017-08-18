import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"

import NavBar from './../containers/navbar/';
// import Hero from './../layouts//Hero'
// import SpecialsContainer from './../container/SpecialContainer'
// import FavoriteContainer from './../container/FavoriteContainer'
// import FooterContainer from './../container/FooterContainer'
// import SectionSeparator from './../components/SectionSeparator'

// import "../css/typography.css"
// import styles from "../css/styles.css"

// import hero from './../assets/tangotable-min.png'
// import scent from './../assets/scent.svg';
// import image1 from './../assets/tangotable-min.png';

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
        {/*<NavBar />*/}
        {/*<Hero />
        <SpecialsContainer
          icon={scent}
          image={image1}
        />
        <SectionSeparator
          text="Favorites"
         />
        <FavoriteContainer
          icon={scent}
        />
        <FooterContainer />*/}
      </div>
    )
  }
}
