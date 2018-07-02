import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

@connect(state => ({
  auth: state.auth,
  user: state.auth.user
}))
class ProfileButton extends Component {
  static propTypes = {
    user: PropTypes.shape({
      username: PropTypes.string
    }),
  };

  render() {
    if (this.props.auth.isLogin) {
      return (
        <div id="profile-button">
          <div id="user-profile-status">
            <p>{this.props.user.username}</p>
            <p>something here!</p>
          </div>
          <div id="user-profile-avatar">
            <img
              className="profile-image"
              src={this.props.user.id}
              alt={this.props.user.username}
            />
          </div>
          <div className="u-cf" />
        </div>
      );
    }
    return (
      <div id="profile-button">
        <Link to="login">login</Link>
        <Link to="register">sign up</Link>
        <div className="u-cf" />
      </div>
    );
  }
}


export default ProfileButton;
