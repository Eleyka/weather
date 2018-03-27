import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '7c32c869234dcb12';

class App extends React.Component {
  state = {
    icon: undefined,
    temperature: undefined,
    time: undefined,
    city: undefined,
    country: undefined,
/*     humidity: undefined,
    description: undefined,
    error: undefined, */

  }
  getWeather = async (e) => {
    e.preventDefault();
/*     const city = e.target.elements.city.value; */
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.wunderground.com/api/${API_KEY}/conditions/forecast/q/${country}.json?`);
    const data = await api_call.json();
    console.log(data);
    this.setState({
      icon: data.current_observation.icon_url,
      temperature:data.current_observation.temperature_string,
      time: data.current_observation.local_time_rfc822,
      city: data.current_observation.display_location.city,
      country: data.current_observation.display_location.full,
/*       humidity: data.main.humidity,
      description: data.weather[0].description,
      error: '' */
    })
  }
  render() {
    return (
      <div>
        <Header />
        <Form getWeather={this.getWeather}/>
        <Weather 
          icon={this.state.icon}
          temperature={this.state.temperature}
          time={this.state.time}
          city={this.state.city}
          country={this.state.country}
/*           humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error} */
        />
      </div>
    );
  }
};
export default App
