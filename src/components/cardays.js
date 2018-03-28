import React, { Component } from 'react'
import { weatherApi } from '../api'
import '../App.css';

class Cardays extends Component {
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
            time: data.observation_time,
            forcast: response.forecast.simpleforecast.forecastday
          });
        }
        this.setState({ loaded: true });
      });
  }
  renderForcast() {
    const forcasts = this.state.forcast;
    return (
      <div className="row">
        {
          forcasts.map(forcast => {
            return (

                  <div className="col-md-3" key={forcast.period}>
                    <div className="card">
                      <div className="card-block">
                        <p className="card-text">
                          {forcast.date.weekday} {forcast.date.monthname} {forcast.date.day}<br />
                          <img src={forcast.icon_url} alt="weather" />
                        </p>
                        <h4>High: {forcast.high.fahrenheit} ({forcast.high.celsius})&deg;</h4>
                        <h4>Low: {forcast.low.fahrenheit} ({forcast.low.celsius})&deg;</h4>
                      </div>
                    </div>
                  </div>

            )
          })
        }
      </div>
    )
  }
  render() {
    if (this.state.loaded) {
      return (
        <div>
          {this.renderForcast()}
        </div>
      )
    } else {
      return (
        <div className="center-block">Hackaton Laboratoria</div>
      )
    }
  }
}

export default Cardays;