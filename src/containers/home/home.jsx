import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import ProfileButton from 'components/profilebutton/profile-button.jsx';

const Home = () => (
  <div id="home-content">
    <Helmet title="home" />

    <div id="home-featured" className="eight columns">
      <h1 id="brand-tag">cozy.</h1>
    </div>

    <div id="home-sidebar" className="four columns">
      <ProfileButton />

      <div className="main-links">
        <Link to="radio">radio</Link>
        <Link to="boards">boards</Link>
        <Link to="shop">exchange</Link>
      </div>

      <div className="sub-links">
        <Link to="about">about</Link>
      </div>
    </div>

  </div>
);

export default Home;
