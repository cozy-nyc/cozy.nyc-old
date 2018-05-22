import React, {Component} from 'react';
import {IndexLink, Link} from 'react-router'
import {connect} from 'react-redux';

import ProfileButton from '../profilebutton/profile-button';


class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      showSidebarMenu: false,
      showProfileMenu: false
    };
  }

  openSidebarMenu(){
    this.setState({
      showSidebarMenu: true,
    });
  }

  closeNavMenu(){
    this.setState({
      showSidebarMenu: false,
    });
  }

  render() {
      const cube = require('./cube.svg');
      const styles = require('./NavBar.scss');
      const sidebarmenu = ( this.state.showSidebarMenu ?
          <div id="navbar-logo" className="dropdown">
            <span className="dropdown-btn" onClick={ () => this.closeNavMenu() }>
              <img id='brand-img' src={cube}/>
            </span>
            <div id="sidebar-menu">
              <span id="sidebar-menu-wrapper">
                <div className='main-links'>
                  <Link to={'/radio'}>radio</Link>
                  <Link to={'/discovery'}>discovery</Link>
                  <Link to={'/boards'}>boards</Link>
                </div>

                <div className='sub-links'>
                  <Link to={'/shop'}>shop</Link>
                  <Link to={'/about'}>about</Link>
                  <br />
                  <Link to={'/contact'}>contact</Link>
                </div>
              </span>
            </div>
            <span className="sidebar-exit" onClick={ () => this.closeNavMenu() }> </span>
          </div>
        : <div id="navbar-logo" className="dropdown">
            <span className="dropdown-btn" onClick={ () => this.openSidebarMenu() }>
              <img id='brand-img' src={cube}/>
            </span>
          </div>);

      return (
        <div id="navbar">

          { sidebarmenu }

          <div id="navbar-profile">

          </div>

          <div className='u-cf'></div>

        </div>
      )
  }
}


export default NavBar;
