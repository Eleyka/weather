import React, {Component} from 'react';
import './item-sensation.css';

const sensations = [
  {
    nameSensation: 'Mucho frio',
    IDSensation: 1,
    imageSensation: 'http://4.bp.blogspot.com/-Vjs-5x7yQAk/Vm5vgwem25I/AAAAAAAAN3M/Waxq1PUNYO0/s1600/previs%25C3%25A3o-tempo1.jpg2_1.jpg',
    rangemin: "10°",
    rangemax: '16°',
  },
  {
    nameSensation: 'Frio',
    IDSensation: 3,
    imageSensation: 'https://i.pinimg.com/originals/65/05/4e/65054ec7280158446d9f967f32922a4a.jpg',
    rangemin: "17°",
    rangemax: '20°',
  },
  {
    nameSensation: 'Mucho calor',
    IDSensation: 2,
    imageSensation: 'https://lh5.ggpht.com/DCSIqyb4qnMnxTmbBm6rLv85u7g0ZCgDwT16nVeRI1OXE58v9QvD9YtGCUIK_z9mWp0=w300',
    rangemin: "30°",
    rangemax: '35°',
  },
  {
    nameSensation: 'Calor',
    IDSensation: 4,
    imageSensation: 'https://getandroid.ir/uploads/posts/2015-02/1423058643_weather-logo.png',
    rangemin: "23°",
    rangemax: '27°',
  },
  {
    nameSensation: 'Estoy bien',
    IDSensation: 4,
    imageSensation: 'http://www.iquiz.sg/uploadfolder/quizzes/coverimages/1dJMfZq1_sunny.png',
    rangemin: "21°",
    rangemax: '22°',
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
    const arraySensations = sensations.map( (sensation) => <button type="button" className="card-items" onClick={() => this.click()}><p className="style-text">{sensation.nameSensation}</p><img src={sensation.imageSensation} className="prop-buttons"/><p className="style-text">{sensation.rangemin} - {sensation.rangemax}</p></button>)
    return (
      <div>
        <h2>Click the button a few times and refresh page</h2>
        {arraySensations}
        {/* <button onClick={this.click}>Click me</button> Counter {this.state.clicks} */}
      </div>
    );
  }
}

// Intento de guardar data en local storage
// class ItemSensation extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       sensations : [
//         {
//           nameSensation: 'lluvioso',
//           IDSensation: 1,
//           imageSensation: 'assets/lluvia.png',
//         },
//         {
//           nameSensation: 'caluroso',
//           IDSensation: 2,
//           imageSensation: 'assets/sol.png',
//         },
//         {
//           nameSensation: 'templado',
//           IDSensation: 3,
//           imageSensation: 'assets/templado.png',
//         },
//         {
//           nameSensation: 'perfecto',
//           IDSensation: 4,
//           imageSensation: 'assets/perfecto.png',
//         },
//       ]
//     }
    
//     // var storedClicks = 0;

//     // if (localStorage.getItem('clicks')) {
//     //   storedClicks = parseInt(localStorage.getItem('clicks'));
//     // }

//     // this.state = {
//     //   clicks: storedClicks,
//     // };
//     // this.click = this.click.bind(this);
    
//   } 
  
//   click(index) {
//     // const arrayID = 
//     // var newclick = this.state.sensations[0].IDSensation
//     const newclick = this.state.sensations.map((elem) => {console.log(elem.IDSensation[index])}); 
//     console.log(newclick)
//     console.log(this.setState({sensations: newclick}));
//     // Set it
//     localStorage.setItem('sensations', newclick);
//   };

  
//   render() {
//      const arraySensations = this.state.sensations.map( (sensation, index) => <button type="button" onClick={() => this.click({index})}>{sensation.IDSensation}</button>)
//         {/* <button onClick={this.click}>lluvioso</button> Counter {this.state.clicks}
//         <button onClick={this.click}>caluroso</button> Counter {this.state.clicks}
//         <button onClick={this.click}>templado</button> Counter {this.state.clicks}
//         <button onClick={this.click}>perfecto</button> Counter {this.state.clicks} */}
    
//     return (
//       <div>
//         <h2>Sensaciones del usuario</h2>
//         {arraySensations}
//       </div>
//     );
//   }
// }

export default ItemSensation;