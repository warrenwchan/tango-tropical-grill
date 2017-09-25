import React, { Component } from 'react';
import client from '../../data/contentful';
import styles from './styles.scss';

import Section from '../../components/section/';
import Combo from '../../components/combo/';

import Sub from '../../assets/favorites/s2-min.jpg';
import Bun from '../../assets/favorites/24-min.jpg';
import Stir from '../../assets/favorites/40-min.jpg';

class ComboContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      combos: [],
    };

    this.getCombos = this.getCombos.bind(this);
  }

  componentDidMount() {
    this.getCombos()
  }

  getCombos() {
    {client.getEntries({order: 'sys.createdAt'}).then(entries => {
      console.log(entries)
      entries.items.map((entry, i) => {
        const combo = entry.fields
        let joined = this.state.combos.concat(combo);
        this.setState({combos: joined})
      })
    })}
  }

  render() {
    console.log('a', this.state.combos)
    let comboOrdered = this.state.combos.comboTitle
    console.log('b', comboOrdered)
    console.log('c', this.state.combos.sys)
    return (
      <Section
        id="combos"
        title="Combos"
        icon={this.props.icon}
        subText="Our lunch combos are easy as ABC"
      >
        <div className="comboContainer">
          {this.state.combos.length ? (
            this.state.combos.map((combo, i) => {
              return <Combo
                key={i}
                title={combo.comboAppellation}
                main={combo.comboChoice}
                sides={combo.comboSides}
                price={combo.comboPrice}
                image={combo.comboImage.fields.file.url}
              />
            })
          ) : (
            null
          )}
        </div>
      </Section>
    );
  }
}

export default ComboContainer;
