import React, { Component } from 'react';
import styles from './styles.scss'

import ScrollableAnchor from 'react-scrollable-anchor'

class MapContainer extends Component {
  render() {
    return (
      <ScrollableAnchor id={'location'}>
        <div className="mapContainer">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.6398667018975!2d-114.0552372836882!3d51.096653479569824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537165a40317cd99%3A0x5cc67c7f19e74f06!2sTango+Tropical+Grill!5e0!3m2!1sen!2sca!4v1505618464968" width="100%" height="600" frameBorder="0" allowFullScreen="true"></iframe>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default MapContainer;
