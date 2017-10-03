import React, {Component} from 'react';
import styles from './styles.scss';


class Combo extends Component {
  render() {

    const comboBG = {
      backgroundImage: 'linear-gradient(180deg, rgba(26,26,26,0.5) 0%,rgba(26,26,26,0.8) 100%), url('+ this.props.image + ')',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }

    return(
      <div className="combo" style={comboBG}>
        <div className="slideInfoCard">
          <h2>{this.props.title}</h2>
          <p>
            {this.props.main}<br/>
            + {this.props.sides}<br/>
            + Soft Drink
          </p>
          <h2 className="price" >{this.props.price}</h2>
          <p>Choices:</p>
          <div className="comboItems">
            {this.props.items ? (
              this.props.items.map((item, i) => {
                return <p key={i}>{item}</p>
              })
            ) : (
              null
            )}
          </div>
        </div>
      </div>
    )
  }

}
export default Combo
