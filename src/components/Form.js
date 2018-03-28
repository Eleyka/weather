import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 flex">
            <div className="col-md-8">
              <form className="flex" onSubmit={this.props.getWeather}>
                <input type="text" name="country" className="form-control" placeholder="Country..." />
                <button className="btn btn-primary">Get Weather</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Form