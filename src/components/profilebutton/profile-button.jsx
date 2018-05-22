import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ProfileButton extends Component {
  static propTypes = {
    user: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render() {
    return (
      <div id="profile-button">
        <div id="user-profile-status">
          <p>{this.props.user.username}</p>
          <p>{this.props.user.rep}</p>
        </div>
        <div id="user-profile-avatar">
          <img
            className="profile-image"
            src={this.props.user.avatarUrl}
            alt={this.props.user.username}
          />
        </div>
        <div className="u-cf" />
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    user: state.activeUser
  };
}

export default connect(mapStateToProps)(ProfileButton);
