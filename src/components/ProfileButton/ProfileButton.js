import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as authActions from 'redux/modules/auth';

/*
  Profile Button Component

  Display current logged in user. If user isn't logged in then it displays 'login' and
  'register' links.

  TODO:
    - Display current User's Rank/Title
    - Use current user's profile image
*/
@connect(
  state => ({ user: state.auth.user }),
  { ...authActions }
)
@withRouter
class ProfileButton extends Component {
  static propTypes = {
    user: PropTypes.shape({
      username: PropTypes.string
    }).isRequired,
    profile: PropTypes.object,
    logout: PropTypes.func.isRequired,
    getUserProfile: PropTypes.func.isRequired
  };

  static defaultProps = {
    // Define any defaults like Board tag
    profile: []
  };

  componentDidUpdate() {
    const { profile, user, getUserProfile } = this.props;

    if (profile == null && user != null) {
      getUserProfile(user.username);
    }
  }

  render() {
    const styles = require('./ProfileButton.scss');
    const { user, profile, logout } = this.props;

    return (
      <div className={styles.profileButton}>
        {user && (
          <div>
            <div className={styles.userInfo}>
              <Link to={`/u/${user.username}`}>
                <p>{`@${user.username}`}</p>
              </Link>
              {/* TODO: Users Rank/Title */}
              <button className={styles.logoutButton} type="button" onClick={logout}>
                logout
              </button>
            </div>
            <div className={styles.userAvatar}>
              <Link to={`/u/${user.username}`}>
                <img className={styles.profileImage} src={profile.profileImg} alt={user.username} />
              </Link>
            </div>
          </div>
        )}
        {!user && (
          <div className={styles.auth}>
            <Link to="/login">login</Link>
            <Link to="/register">sign up</Link>
          </div>
        )}
        <div className="u-cf" />
      </div>
    );
  }
}

export default ProfileButton;
