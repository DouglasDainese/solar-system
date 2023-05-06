import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
  render() {
    return (
      <header>
        <h1 className="SistemSolar">
          <span>SISTEMA</span>
          {' '}
          SOLAR
        </h1>
        <div className="SistemSolar-ring" />
      </header>
    );
  }
}

export default Header;
