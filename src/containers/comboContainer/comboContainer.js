import React, { Component } from 'react';
import client from '../../data/contentful';
import styles from './styles.scss';

import Section from '../../components/section/';
import Combo from '../../components/combo/';

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
    client.getEntries({content_type: 'combos', order: 'sys.createdAt'}).then(entries => {
      entries.items.map((entry, i) => {
        const combo = entry.fields
        let joined = this.state.combos.concat(combo);
        this.setState({combos: joined})
      })
    })
  }

  render() {
    let comboOrdered = this.state.combos.comboTitle
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
