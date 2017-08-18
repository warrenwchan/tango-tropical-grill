import React, { Componenet } from 'react';
import styles from './styles.scss'

import FontAwesome from 'react-fontawesome'

const ContactInfo = ({contactIcon, contactLink, contactInfo}) => (
  <div className="contactInfo">
    <FontAwesome
      className="contactIcon"
      name={contactIcon}
    />
    <a className="contactText" target="_blank" href={contactLink}>{contactInfo}</a>
  </div>
)

export default ContactInfo;
