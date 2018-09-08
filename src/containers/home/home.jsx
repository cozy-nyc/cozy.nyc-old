import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import ProfileButton from 'components/profilebutton/profile-button.jsx';

/*
  Home Page

  HOME OF NEET
*/
const Home = () => (
  <div id="home-content" className="row">
    <Helmet title="home" />

    <div id="home-featured" className="col-xs-12 col-md-8 ">
      <h1 id="brand-tag">cozy.</h1>
    </div>

    <div id="home-sidebar" className="col-xs-12 col-md-4">
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
