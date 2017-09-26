import React, { Component } from 'react'
import client from '../../data/contentful';
import styles from './styles.scss'

import Section from './../../components/section';
import ImageGrid from './../../containers/imageGrid';

class FavoriteContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      faves: []
    };
    this.getFaves = this.getFaves.bind(this)
  }

  componentDidMount() {
    this.getFaves()
  }

  getFaves() {
    client.getEntries({content_type: 'favorties', order: 'sys.createdAt'}).then(entries => {
      entries.items.map((entry, i) => {
        const fave = entry.fields
        let joined = this.state.faves.concat(fave)
        this.setState({faves: joined})
      })
      console.log('a',this.state.faves)
    })
  }

  render() {
    return (
      <div className="favoriteContainer">
        <Section
          id="favorites"
          title="Favorites"
          icon={this.props.icon}
          subText="Try our top 10 most ordered."
        >
          <ImageGrid
            favesArr={this.state.faves}
          />
        </Section>
      </div>
    );
  }
}

export default FavoriteContainer;
