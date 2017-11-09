import React, { Componenet } from 'react';
import styles from './styles.scss'

import FontAwesome from 'react-fontawesome'
import Link from 'gatsby-link';

const Icon = (contactIcon) => {
  if(contactIcon) {
    return <FontAwesome className="contactIcon" name={contactIcon} />
  } else {
    return null
  }
}

const ContactInfo = ({contactIcon, contactLink, contactInfo, target}) => (
  <div className="contactInfo">
    {Icon(contactIcon)}
    <a className="contactText" target={target} href={contactLink}>{contactInfo}</a>
  </div>
)

export default ContactInfo;
