import React, { Component } from 'react';
import client from  '../../data/contentful';
import styles from './styles.scss';
import Link from 'gatsby-link'

import Section from '../../components/section/';
import asset1 from '../../assets/Asset 1.jpg';


class SpecialsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      specials: []
    }
    this.getSpecials = this.getSpecials.bind(this);
  }

  componentDidMount() {
    this.getSpecials()
  }

  getSpecials() {
    client.getEntries({content_type: 'specials', order: 'sys.createdAt'}).then(entries => {
      entries.items.map((entry, i) => {
        const specials = entry.fields
        let joined = this.state.specials.concat(specials);
        this.setState({specials: joined})
      })
    })
  }

  render() {
    console.log(this.state.specials)
    return (
      <Section
        id="specials"
        title="Specials"
        icon={this.props.icon}
      >
        <div className="special-section">
          <div className="special-section-divid" >
            <img src={asset1} />
          </div>
          {this.state.specials.map((special, i) => {
            console.log(special)
            return (
              <div className="special-card" key={i}>
                <div className="special-img">
                  <img src={special.specialsImage.fields.file.url}/>
                </div>
                <div className="special-card-info">
                  <h2>{special.specialsName}</h2>
                  <p>{special.specialsDescription}</p>
                  <h3>{special.specialsRange}</h3>
                  <Link to="/menu/">See Menu</Link>
                </div>
              </div>
            )}
          )}
        </div>
      </Section>
    );
  }
}

export default SpecialsContainer;
