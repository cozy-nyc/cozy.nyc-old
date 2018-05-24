import React, { Component } from 'react';
import { Link } from 'react-router';

// import ProfileButton from '../profilebutton/profile-button';

class NavBar extends Component {
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
    const cube = require('./cube.svg');
    const sidebarmenu = (this.state.showSidebarMenu ?
      (
        <div id="navbar-logo" className="dropdown">
          <span
            className="dropdown-btn"
            onClick={() => this.closeNavMenu()}
            onKeyPress={this.handleKeyPress}
            role="button"
            tabIndex={0}
          >
            <img id="brand-img" src={cube} alt="cube" />
          </span>
          <div id="sidebar-menu">
            <span id="sidebar-menu-wrapper">
              <div className="main-links">
                <Link to="/radio">radio</Link>
                <Link to="/discovery">discovery</Link>
                <Link to="/boards">boards</Link>
              </div>

              <div className="sub-links">
                <Link to="/shop">shop</Link>
                <Link to="/about">about</Link>
                <br />
                <Link to="/contact">contact</Link>
              </div>
            </span>
          </div>
          <span
            className="sidebar-exit"
            onClick={() => this.closeNavMenu()}
            onKeyPress={this.handleKeyPress}
            role="button"
            tabIndex={0}
          />
        </div>
      )
      : (
        <div id="navbar-logo" className="dropdown">
          <span
            className="dropdown-btn"
            onClick={() => this.openSidebarMenu()}
            onKeyPress={this.handleKeyPress}
            role="button"
            tabIndex={0}
          >
            <img id="brand-img" src={cube} alt="cube" />
          </span>
        </div>
      ));

    return (
      <div id="navbar">
        {sidebarmenu}
        <div id="navbar-profile" />
        <div className="u-cf" />
      </div>
    );
  }
}


export default NavBar;
