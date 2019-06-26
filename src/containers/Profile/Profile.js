import React, { Component } from 'react';
// import { Link, browserHistory } from 'react-router-dom';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as profileActions from 'redux/modules/profile';

@connect(
  state => ({ profile: state.profile }),
  { ...profileActions }
)
class Profile extends Component {
  static propTypes = {
    profile: PropTypes.shape({
      profileImg: PropTypes.string
    }),
    match: PropTypes.shape({
      params: PropTypes.shape({
        username: PropTypes.string.isRequired
      })
    }),
    getProfile: PropTypes.func.isRequired,
  }

  static defaultProps = {
    profile: null,
    match: null
  };


  componentWillMount() {
    const { getProfile, match } = this.props;
    getProfile(match.params.username);
  }


  render() {
    const { profile, match } = this.props;
    return (
      <div>
        <Helmet title="noot" />
        <img
          id="profile-page-avatar"
          src={profile.profileImg}
          alt={match.params.username}
        />
        <h1>{match.params.username}</h1>
      </div>
    );
  }
}

export default Profile;
