import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getProfile } from 'actions/profile/get'

/*
  User Profile Page
  Displays information about the user

  TODO:
    Add edit options when the current user is on their own page.
*/
@connect(state => ({
  auth: state.auth,
  profile: state.activeProfile
}))
class Profile extends Component {
  static propTypes = {
    user: PropTypes.shape({
      username: PropTypes.string
    }),
    match: PropTypes.shape({
      params: PropTypes.shape({
        username: PropTypes.string.isRequired
      })
    }),
  };
  componentWillMount() {
    this.props.dispatch(getProfile(this.props.match.params.username));
  }
  render() {
    return (
      <div id="container">
        <img
          id="profile-page-avatar"
          src={this.props.profile.profileImg}
          alt={this.props.match.params.username}
        />
        <h1>{this.props.match.params.username}</h1>
      </div>
    );
  }
}

export default Profile;
