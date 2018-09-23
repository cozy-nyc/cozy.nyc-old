import React, { Component } from 'react';
import Helmet from 'react-helmet';


/*
  About Page

  Display a the cozy logo.

  TODO:
    Add pause/mute button
*/
class About extends Component {
  render() {
    const cube = require('assets/img/cube.svg');
    const musicmp3 = require('assets/audio/lake-zurich.mp3');
    const musicogg = require('assets/audio/lake-zurich.ogg');

    return (
      <div className="about-container">
        <canvas className="about-backgroundGif" />
        <Helmet title="about" />
        <img id="about-cube" src={cube} alt="cube" />
        <audio autoPlay loop>
          <source src={musicogg} type="audio/ogg" />
          <source src={musicmp3} type="audio/mpeg" />
        </audio>
        <span id="external-links">
        <a href="http://dev.cozy.nyc" alt="">dev site</a>
        <a href="http://api.cozy.nyc" alt="">api</a>
        <a href="https://github.com/cozy-nyc/cozy-nyc" alt="">git repo</a>
        </span>
      </div>
    );
  }
}

export default About;
