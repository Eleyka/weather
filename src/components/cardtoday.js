import React, { Component } from 'react'
import { weatherApi } from '../api'

class CardToday extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loaded: false
    };
  }
  componentWillMount() {
    this.getWeather('autoip');
  }
  getWeather(query) {
    this.setState({
      error: null,
      loaded: false
    });
    weatherApi(query)
      .then(response => {
        if (response.response.error) {
          this.setState({
            error: 'Unable to get weather. Please try again.'
          })
        } else {
          let data = response.current_observation;
          this.setState({
            temp: data.temperature_string,
            location: data.display_location.full,
            icon_url: data.icon_url,
            time: data.local_time_rfc822,
            forcast: response.forecast.simpleforecast.forecastday
          });
        }
        this.setState({ loaded: true });
      });
  }
  renderWeather() {
    return (
      
        <div className="col-md-12 flex-center">
          <div className="card">
            <div className="card-block">
              <h3>Ubicación Actual</h3>
              <p className="card-text">
                <img src={this.state.icon_url} alt="weather" /><br />
                <h4>Temperature:{this.state.temp}&deg;</h4>
                Time: {this.state.time}
              </p>
              <h4 className="card-title">Location: {this.state.location}</h4>
            </div>
          </div>
        </div>
      
    )
  }
  render() {
    return (
      <div>{this.renderWeather()}</div>
    )
  }
}
export default CardToday;