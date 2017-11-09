import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.scss'
import favicon from '../favicon.png'

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet>
      <title>Tango Tropical Grill</title>
      <meta charSet="utf-8"/>
      <meta name="description" content="Tango Tropical Grill is a casual dining restaurant that specializes in Thai and Vietnamese food located in Calgary, Alberta."/>
      <meta name="keywords" content="Casual restaurant offering a mix of Vietnamese and Thai dishes, including pho, along with a bar"/>
      <meta name="author" content="Warren Chan"/>
      <link rel="shortcut icon" type="image/png" href={favicon} />
    </Helmet>
    {children()}
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
