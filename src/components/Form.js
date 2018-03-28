import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.getWeather}>
        <input type="text" name="country" placeholder="Country..." />
        <button onClick={true}>Get Weather</button>
      </form>
    );
  }
};

export default Form