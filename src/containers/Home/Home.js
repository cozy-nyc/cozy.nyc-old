import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import config from 'config';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

@connect(state => ({
  online: state.online
}))
export default class Home extends Component {
  static propTypes = {
    online: PropTypes.bool.isRequired
  };

  render() {
    const { online } = this.props;
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    const logoImage = require('./logo.png');
    return (
      <div id="home-content">
        <Helmet title="Home" />

        <div id="home-featured" className='eight columns'>
          <h1 id="brand-tag">cozy.</h1>
        </div>

        <div id='home-sidebar' className='four columns'>
          <div>

          </div>
          <div className='main-links'>
            <Link to={'radio'}>radio</Link>
            <Link to={'discovery'}>discovery</Link>
            <Link to={'boards'}>boards</Link>
          </div>

          <div className='sub-links'>
            <Link to={'shop'}>shop</Link>
            <Link to={'about'}>about</Link>
            <br />
            <Link to={'contact'}>contact</Link>
          </div>
        </div>

      </div>
    );
  }
}
