import React, {Component} from 'react';
import styles from './styles.scss';
import FontAwesome from 'react-fontawesome';

class Combo extends Component {
  render() {

    const comboBG = {
      backgroundImage: 'linear-gradient(180deg, rgba(26,26,26,0.2) 0%,rgba(26,26,26,0.5) 100%), url('+ this.props.image + ')',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }

    return(
      <div className="combo" style={comboBG}>
        <div className="slideInfoCard">
          <h2>{this.props.title}</h2>
          <p style={{paddingLeft:'20px'}}>{this.props.main}</p>
          <p>
            <FontAwesome style={{opacity:'0.6', marginRight:'5px'}} name="plus"/> {this.props.sides}<br/>
            <FontAwesome style={{opacity:'0.6', marginRight:'5px'}} name="plus"/> Soft Drink
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
