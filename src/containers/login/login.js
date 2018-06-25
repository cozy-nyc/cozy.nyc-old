import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import LoginForm from 'components/login-form/login-form';
import * as authActions from 'redux/modules/auth';
import * as notifActions from 'redux/modules/notifs';

@connect(
  state => ({ user: state.auth.user }),
  { ...notifActions, ...authActions }
)
export default class Login extends Component {
  static propTypes = {
    user: PropTypes.shape({
      username: PropTypes.string
    }),
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    notifSend: PropTypes.func.isRequired
  };

  static defaultProps = {
    user: null
  };

  static contextTypes = {
    router: PropTypes.object
  };

  login = async data => {
    const result = await this.props.login('local', data);
    this.successLogin();
    return result;
  };

  successLogin = () => {
    this.props.notifSend({
      message: "You're logged !",
      kind: 'success',
      dismissAfter: 2000
    });
  };

  render() {
    const { user, logout } = this.props;
    return (
      <div className="auth-container">
        <Helmet title="login" />
        <h1>Login</h1>
        {!user && (
          <div>
            <LoginForm onSubmit={this.login} />
          </div>
        )}
        {user && (
          <div>
            <p>You are currently logged in as {user.username}.</p>

            <div>
              <button className="btn btn-danger" onClick={logout}>
                <i className="fa fa-sign-out" /> Log Out
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
