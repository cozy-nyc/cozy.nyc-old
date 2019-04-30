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

  render() {
    const gif = require('./munchies.gif');
    const styles = require('./About.scss');

    return (
      <div className={styles.aboutContainer}>
        <Helmet title="about" />
        <h1>A site for neets...</h1>
        <img src={gif} alt="munchies"/>
      </div>
    );
  }
}

export default About;
