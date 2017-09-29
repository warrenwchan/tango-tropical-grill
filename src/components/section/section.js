import React, { Component } from 'react';
import styles from './styles.scss';

import ScrollableAnchor from 'react-scrollable-anchor';

class Section extends Component {
  render() {
    return (
      <ScrollableAnchor id={this.props.id}>
        <div className="sectionContainer" >
          <div className="sectionTitleContain" >
            <div className="sectionTitle">
              <p>{this.props.title}</p>
              <img className="sectionIcon" src={this.props.icon} alt="{icon}"/>
            </div>
            <p className="sectionSubText" >{this.props.subText}</p>
          </div>
          {this.props.children}
        </div>
      </ScrollableAnchor>
    )
  }
}
export default Section;
