import React, { Component } from 'react';
import styles from './styles.scss';

class Section extends Component {
  render() {
    return (
      <div id={this.props.id} className="sectionContainer" >
        <div className="sectionTitleContain" >
          <div className="sectionTitle">
            <p>{this.props.title}</p>
            <img className="sectionIcon" src={this.props.icon} alt="{icon}"/>
          </div>
          <p className="sectionSubText" >{this.props.subText}</p>
        </div>
        {this.props.children}
      </div>
    )
  }
}
export default Section;
