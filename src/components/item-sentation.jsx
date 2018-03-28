import React, {Component} from 'react'
import ItemPaint from './item-paint';

const sensations = [
  {
    nameSensation: 'lluvioso',
    IDSensation: 1,
    imageSensation: 'assets/lluvia.png',
  },
  {
    nameSensation: 'caluroso',
    IDSensation: 2,
    imageSensation: 'assets/sol.png',
  },
  {
    nameSensation: 'templado',
    IDSensation: 3,
    imageSensation: 'assets/templado.png',
  },
  {
    nameSensation: 'perfecto',
    IDSensation: 4,
    imageSensation: 'assets/perfecto.png',
  },
]


class ItemSensation extends React.Component {
  constructor(props) {
    super(props);
    var storedClicks = 0;

    if (localStorage.getItem('clicks')) {
      storedClicks = parseInt(localStorage.getItem('clicks'));
    }

    this.state = {
      clicks: storedClicks,
    };
    this.click = this.click.bind(this);
  }

  click() {
    var newclick = this.state.clicks + 1;
    this.setState({clicks: newclick});
    // Set it
    localStorage.setItem('clicks', newclick);
  }

  

  render() {
    return (
      <div>
        <h2>Click the button a few times and refresh page</h2>
        <ItemPaint onClick={this.click} /> Counter {this.state.clicks}  
      
      </div>
    );
  }
}
export default ItemSensation;