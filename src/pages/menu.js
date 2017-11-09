import React from 'react';
import './styles.scss';
import dineInMenu from './../assets/dine-in-menus.pdf';

const menuPDF = () => (
  <div className="pdfContainer">
    <iframe
      src={dineInMenu}
      frameBorder="0"
      width="100%"
      height="100%"
    ></iframe>
  </div>
)

export default menuPDF
