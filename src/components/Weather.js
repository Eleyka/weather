import React from 'react';


class Weather extends React.Component {
  render() {
    return (
      <div>
        {this.props.icon && <img src={this.props.icon} alt="weather"/>}
        {this.props.temperature && <p>Temperatura: {this.props.temperature}</p>}
        {this.props.time && <p>Hora: {this.props.time}</p>}
        {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
{/*         {this.props.humidity && <p>{this.props.humidity}</p>}
        {this.props.description && <p>{this.props.description}</p>} */}
      </div>
    );
  }
};
export default Weather