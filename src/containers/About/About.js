import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { provideHooks } from 'redial';
import MiniInfoBar from 'components/MiniInfoBar/MiniInfoBar';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';

/* eslint-disable max-len */
@provideHooks({
  fetch: ({ store: { dispatch, getState } }) => !isInfoLoaded(getState()) ? dispatch(loadInfo()).catch(() => null) : Promise.resolve()
})
class About extends Component {
  state = {
    showKitten: false
  };

  handleToggleKitten = () => {
    const { showKitten } = this.state;

    this.setState({ showKitten: !showKitten });
  };

  render() {
    const cube = require('./cube.svg');

    return (
      <div className="about-container">
        <Helmet title="about" />
        <canvas className="about-backgroundGif" />
        <img id="about-cube" src={cube} alt="cube" />
      </div>
    );
  }
}

export default About;
