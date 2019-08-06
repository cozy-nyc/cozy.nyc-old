import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProfileButton from 'components/ProfileButton/ProfileButton';
import SVG from 'react-inlinesvg';

/*
  NavBar Component

  Navigation bar used for site.

  TODO:
    Add background when user scrolls down from the top of a page.
*/
class NavBar extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  showDropdown() {
    const { show } = this.state;
    // show dropdown
    this.setState({
      show: !show
    });
    // change icons
    // styles.navbarDropdown
    // styles.navbarDropdown
  }

  render() {
    const styles = require('./NavBar.scss');
    const { location } = this.props;
    const { show } = this.state;
    const cube = require('./cube.svg');
    const hamburger = require('./hamburger.svg');
    const dropdown = show ? (
      <div>
        <div className="main-links">
          <NavLink className={`${styles.mainLink} nav-hover-orange`} to="/stream">
            stream
          </NavLink>
          <NavLink className={`${styles.mainLink} nav-hover-blue`} to="/boards">
            boards
          </NavLink>
          <NavLink className={`${styles.mainLink} nav-hover-green`} to="/discovery">
            discovery
          </NavLink>
        </div>
        <br />
        <div className="sub-links">
          <NavLink to="/about">about</NavLink>
          <NavLink to="/contribute">contribute</NavLink>
          <NavLink to="/exchange">exchange</NavLink>
        </div>
      </div>
    ) : null;

    if (location.pathname === '/') {
      /*
        IF at Home page:
          Don't display NavBar.

      */
      return <div className="u-cf" />;
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
        <div className={styles.navbarDropdown}>
          <div className={styles.navbarDropdownMenu}>
            <div className={styles.navbarNav}>
              <span className={styles.navbarMenu} role="button" tabIndex={0}>
                <button type="button" className={styles.hamburger} onClick={() => this.showDropdown()}>
                  <SVG className={show ? styles.iconClicked : null} src={hamburger} alt="hamburger" />
                </button>
              </span>
              <Link className={styles.navbarButton} to="/">
                <SVG className={show ? styles.iconClicked : null} src={cube} alt="cube" />
              </Link>
              {dropdown}
            </div>
          </div>
        </div>
        <div className={styles.profileButton}>
          <ProfileButton />
        </div>
        <div className="u-cf" />
      </div>
    );
  }
}

export default withRouter(NavBar);
