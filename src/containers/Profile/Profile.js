import React, { Component } from 'react';
// import { Link, browserHistory } from 'react-router-dom';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as profileActions from 'redux/modules/profile';

@connect(
  state => ({ profile: state.profile.active }),
  { ...profileActions }
)
class Profile extends Component {
  static propTypes = {
    profile: PropTypes.shape({
      username: PropTypes.string
      // profileImg: PropTypes.string
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
    const { profile } = this.props;
    return (
      <div>
        {profile && (
          <div>
            <Helmet title={profile.username} />
            <img
              id="profile-page-avatar"
              src={profile.profileImg}
              alt={profile.username}
            />
            <h1>{profile.username}</h1>
          </div>
        )}
        {!profile && (
          <div>
            <Helmet title="noot" />
            <h1>NOOT</h1>
          </div>
        )}
      </div>
    );
  }
}

export default Profile;
