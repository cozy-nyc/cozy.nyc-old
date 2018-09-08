import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ProfileButton from 'components/profilebutton/profile-button.jsx';

/*
  NavBar Component

  Navigation bar used for site.

  TODO:
    Add background when user scrolls down from the top of a page.
*/
class NavBar extends Component {
  goBack() {
    window.history.back();
  }

  render() {
    const cube = require('assets/img/cube.svg');
    const backbutton = require('assets/img/left-arrow.svg');
    if (window.location.pathname === '/') {
      /*
        IF at Home page:
          Don't display NavBar.

      */
      return (
        <div className="u-cf" />
      );
    } else if (window.location.pathname === '/about') {
      /*
        If at About page:
          Display NavBar without the brand logo.
      */
      return (
        <div id="navbar">
          <div id="navbar-nav" className="dropdown">
            <a id="navbar-backbutton" onClick={this.goBack}>
              <img src={backbutton} alt="backbutton" />
            </a>
          </div>
          <div id="navbar-profile">
            <ProfileButton />
          </div>
          <div className="u-cf" />
        </div>
      );
    }
    /*
      Else:
        Display basic NavBar.
    */
    return (
      <div id="navbar">
        <div id="navbar-nav">
          <a id="navbar-backbutton" onClick={this.goBack}>
            <img src={backbutton} alt="backbutton" />
          </a>
          <span
            id="navbar-logo"
            className="dropdown-btn"
            role="button"
            tabIndex={0}
          >
            <Link id="navbar-button" to="/">
              <img id="brand-img" src={cube} alt="cube"/>
            </Link>
            <div id="navbar-dropdown">
              <div id="navbar-menu">
                <div className="main-links">
                  <Link to="/radio">radio</Link>
                  <Link to="/boards">boards</Link>
                  <Link to="/shop">exchange</Link>
                </div>

                <div className="sub-links">
                  <Link to="/about">about</Link>
                </div>
              </div>
            </div>
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
