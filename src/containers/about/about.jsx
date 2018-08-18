import React, { Component } from 'react';
import Helmet from 'react-helmet';

/**
 * About Page
 * Display a the cozy logo.
 *
 * ToDo: Add pause/mute button
 */
class About extends Component {
  render() {
    const cube = require('assets/img/cube.svg');
    const musicmp3 = require('assets/audio/lake-zurich.mp3');
    const musicogg = require('assets/audio/lake-zurich.ogg');

    return (
      <div className="about-container">
        <canvas className="about-backgroundGif"/>
        <Helmet title="about" />
        <img src={cube} alt="cube" />
        <audio autoPlay loop>
          <source src={musicogg} type="audio/ogg" />
          <source src={musicmp3} type="audio/mpeg" />
        </audio>
      </div>
    );
  }
}

export default About;
