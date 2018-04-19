import React, {Component} from 'react';
import {connect} from 'react-redux';

/**
 * User Profile Page
 * Displays information about the user
 *
 * ToDo: Add edit options when the current user is on their own page.
 */
class Profile extends Component {
  render() {
    return (
      <div id="container">
        <img id='profile-page-avatar' src={ this.props.user.avatarUrl } />
        <h1>{ this.props.user.username }</h1>
        <h3>{ this.props.user.rep }</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.activeUser
  };
}

export default connect(mapStateToProps)(Profile);
