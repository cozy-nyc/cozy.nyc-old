import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';


/*
  NavBar Component

  Navigation bar used for site.

  TODO:
    Add background when user scrolls down from the top of a page.
*/
class NavBar extends Component {
  goBack() {
    window.history.back();
  }

  render() {
    const cube = require('./cube.svg');
    const backbutton = require('./left-arrow.svg');
    const styles = require('./NavBar.scss');

    if (this.props.location.pathname === '/') {
      /*
        IF at Home page:
          Don't display NavBar.

      */
      return (
        <div className="u-cf" />
      );
    }
    // else if (this.props.location.pathname === '/about') {
    //   /*
    //     If at About page:
    //       Display NavBar without the brand logo.
    //   */
    //   return (
    //     <div className={styles.navbar}>
    //       <div className={styles.navbarNav}>
    //         <a className={styles.navbarBackbutton} onClick={this.goBack}>
    //           <img src={backbutton} alt="backbutton" />
    //         </a>
    //       </div>
    //     </div>
    //   );
    // }
    /*
      Else:
        Display basic NavBar.
    */
    return (
      <div className={styles.navbar}>
        <div className={styles.navbarNav}>
          <a className={styles.navbarBackbutton} onClick={this.goBack}>
            <img src={backbutton} alt="backbutton" />
          </a>
          <span
            className={styles.navbarMenu}
            role="button"
            tabIndex={0}
          >
            <Link className={styles.navbarButton} to="/">
              <img className={styles.brandimg} src={cube} alt="cube"/>
            </Link>
            <div className={styles.navbarDropdown}>
              <div className={styles.navbarDropdownMenu}>
                <div className="main-links">
                  <NavLink className="nav-hover-orange" to="stream">stream</NavLink>
                  <NavLink className="nav-hover-blue" to="boards">boards</NavLink>
                  <NavLink className="nav-hover-green" to="exchange">exchange</NavLink>
                </div>

                <div className="sub-links">
                  <NavLink to="about">about</NavLink>
                  <NavLink to="contribute">contribute</NavLink>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
    );
  }
}


export default withRouter(NavBar);