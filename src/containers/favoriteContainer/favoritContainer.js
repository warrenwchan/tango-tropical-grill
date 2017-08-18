import React, { Component } from 'react'
import styles from './styles.scss'

import Section from './../../components/Section';
import ImageGrid from './../../components/ImageGrid';

class FavoriteContainer extends Component {
  render() {
    return (
      <div className="favoriteContainer">
        <Section
          id="favorites"
          title="Favorites"
          icon={this.props.icon}
          subText="Try our top 10 most ordered."
        >
          <ImageGrid />
        </Section>
      </div>
    );
  }
}

export default FavoriteContainer;
