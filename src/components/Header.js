import React from 'react';
import '../App.css';


class Header extends React.Component {
  render() {
    return (
      <nav className="navbar App-header">
        <a className="navbar-brand" href="#">
        <h1 className="colorheader">Feel Weather</h1>
        <p  className="colorheader">Hackaton final</p>
        </a>
      </nav>
    );
  }
};

export default Header