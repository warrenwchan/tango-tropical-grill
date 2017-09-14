import React, {Component} from 'react';
import styles from './styles.scss';


class Combo extends Component {
  render() {

    const comboBG = {
      backgroundImage: 'linear-gradient(135deg, rgba(26,26,26,0.5) 0%,rgba(26,26,26,0.5) 100%), url('+ this.props.image + ')',
    }

    return(
      <div className="combo" styles={comboBG}>
        <div className="slideInfoCard">
          <h2>{this.props.title}</h2>
          <p>
            {this.props.main}<br/>
            + {this.props.sides}<br/>
            + Soft Drink
          </p>
          <h2 className="price" >{this.props.price}</h2>
        </div>
      </div>
    )
  }

}
export default Combo
