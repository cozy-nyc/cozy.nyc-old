import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/*
  Profile Button Component

  Display current logged in user. If user isn't logged in then it displays 'login' and
  'register' links.

  TODO:
    - Display current User's Rank/Title
    - Use current user's profile image
*/
@connect(state => ({
  auth: state.auth,
  user: state.auth.user
}))
class ProfileButton extends Component {
  static propTypes = {
    user: PropTypes.shape({
      username: PropTypes.string,
      id: PropTypes.number
    }),
    auth: PropTypes.shape({
      isLogin: PropTypes.bool.isRequired
    })
  };

  render() {
    const profileURL = '/u/' + this.props.user.username;

    if (this.props.auth.isLogin) {
      return (
        <div id="profile-button">
          <div id="user-profile-status">
            <NavLink to={{ pathname: profileURL }}>
              <p>{this.props.user.username}</p>
            </NavLink>
            <p>something here!</p> {/* TODO: Users Rank/Title */}
          </div>
          <div id="user-profile-avatar">
            <NavLink to={{ pathname: profileURL }}>
              <img
                className="profile-image"
                src="https://avatars3.githubusercontent.com/u/2263236?s=400&u=b08c40e215bdaf416f6fecc4016add2b3182f824&v=4"
                alt={this.props.user.username}
              />
            </NavLink>
          </div>
          <div className="u-cf" />
        </div>
      );
    }
    return (
      <div id="profile-button">
        <Link to="/login">login</Link>
        <Link to="/register">sign up</Link>
        <div className="u-cf" />
      </div>
    );
  }
}


export default ProfileButton;
