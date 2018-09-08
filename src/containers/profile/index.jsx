import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


/*
  User Profile Page
  Displays information about the user

  TODO:
    Add edit options when the current user is on their own page.
*/
 @connect(state => ({
   auth: state.auth
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

  render() {
    return (
      <div id="container">
        <img
          id='profile-page-avatar'
          src="https://avatars3.githubusercontent.com/u/2263236?s=400&u=b08c40e215bdaf416f6fecc4016add2b3182f824&v=4"
          alt={this.props.match.params.username}
        />
      <h1>{this.props.match.params.username}</h1>
      </div>
    );
  }
}

export default Profile;
