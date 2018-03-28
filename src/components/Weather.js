import React from 'react';


class Weather extends React.Component {
  render() {
    return (
      <div className="col-md-12 flex-center ">
        <div className="card">
          <p className="card-text">
          {this.props.icon && <img src={this.props.icon} alt="weather" />}
          {this.props.temperature && <h4>Temperature: {this.props.temperature}&deg;</h4>}
          {this.props.time && <p>Time: {this.props.time}</p>}
          {this.props.city && this.props.country && <h4>Location: {this.props.country}</h4>}
        </p>
        </div>
      </div>
    );

  }
  remove() {
    return (
      <div>{this.renderWeather()}</div>
    )
  }
};
export default Weather