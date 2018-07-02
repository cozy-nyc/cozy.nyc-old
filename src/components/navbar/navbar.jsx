import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ProfileButton from 'components/profilebutton/profile-button.jsx';

class NavBar extends Component {
  static get propTypes() {
    return {
      showSidebarMenu: PropTypes.bool.isRequired
    };
  }

  static defaultProps = {
    showSidebarMenu: false
  };

  constructor() {
    super();
    this.state = {
      showSidebarMenu: false,
    };
  }

  openSidebarMenu() {
    this.setState({
      showSidebarMenu: true,
    });
  }

  closeNavMenu() {
    this.setState({
      showSidebarMenu: false,
    });
  }

  render() {
    const cube = require('assets/img/cube.svg');
    if (window.location.pathname == '/'){
      return (
        <div className='u-cf'></div>
      );
    } else if (window.location.pathname == '/about') {
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
    } else {
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
      )
    }
  }
}


export default NavBar;
