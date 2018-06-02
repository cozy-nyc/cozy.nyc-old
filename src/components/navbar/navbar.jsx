import React, { Component } from 'react';
import { Link } from 'react-router';
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
    if ( window.location.pathname != '/' ){
      return (
        <div id="navbar">
          <div id="navbar-logo" className="dropdown">
            <span
              className="dropdown-btn"
              role="button"
              tabIndex={0}
            >
              <img id="brand-img" src={cube} alt="cube" />
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
        <div className='u-cf'></div>
      )
    }
  }
}


export default NavBar;
