import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import config from 'config';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

@connect(state => ({
  online: state.online
}))
class Home extends Component {
  // static propTypes = {
  //   online: PropTypes.bool.isRequired
  // };

  render() {
    // const { online } = this.props;
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    // const logoImage = require('./logo.png');
    return (
      <div className={`${styles.homeContent} container-fluid`}>
        <Helmet title="home" />

        <div className="row">

          <div className={`${styles.homeFeatured} col-md-8`}>
            <h1 className={styles.brandTag}>cozy.</h1>
          </div>

          <div className={`${styles.homeSidebar} col-md-4`}>

            <div className={styles.mainLinks}>
              <Link className={styles.navHoverOrange} to="stream">stream</Link>
              <Link className={styles.navHoverBlue} to="boards">boards</Link>
              <Link className={styles.navHoverGreen} to="exchange">exchange</Link>
            </div>

            <div className={styles.subLinks}>
              <Link to="about">about</Link>
              <Link to="contribute">contribute</Link>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default Home;
