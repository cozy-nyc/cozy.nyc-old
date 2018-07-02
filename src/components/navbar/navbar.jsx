import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ProfileButton from 'components/profilebutton/profile-button.jsx';

class NavBar extends Component {
  render() {
    const cube = require('assets/img/cube.svg');
    if (window.location.pathname === '/') {
      return (
        <div className="u-cf" />
      );
    } else if (window.location.pathname === '/about') {
      return (
        <div id="navbar">
          <div id="navbar-logo" className="dropdown">
            <span
              className="dropdown-btn"
              role="button"
              tabIndex={0}
            >
              <Link to="/">
                >back
              </Link>
            </span>
          </div>
          <div id="navbar-profile">
            <ProfileButton />
          </div>
          <div className="u-cf" />
        </div>
      );
    }
    return (
      <div id="navbar">
        <div id="navbar-logo" className="dropdown">
          <span
            className="dropdown-btn"
            role="button"
            tabIndex={0}
          >
            <Link to="/">
              <img id="brand-img" src={cube} alt="cube" />
            </Link>
          </span>
        </div>
        <div id="navbar-profile">
          <ProfileButton />
        </div>
        <div className="u-cf" />
      </div>
    );
  }
}


export default NavBar;
