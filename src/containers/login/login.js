import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import LoginForm from 'components/login-form/login-form';
import * as authActions from 'actions/auth/actions';
import * as notifActions from 'redux/modules/notifs';

/*
  Login Page

  Page for user to login with there username and password.

  TODO:
    Page should redirct if a user is already login.
*/
@connect(
  state => ({
    user: state.auth.user,
    isLogin: state.auth.isLogin
  }),
  { ...notifActions, ...authActions }
)
export default class Login extends Component {
  static propTypes = {
    user: PropTypes.shape({
      username: PropTypes.string
    }),
    isLogin: PropTypes.bool.isRequired,
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
    const result = await this.props.login(data);
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
    const { user, logout, isLogin } = this.props;
    return (
      <div className="auth-container">
        <Helmet title="login" />
        <h1>Login</h1>
        {!isLogin ? (
          <div>
            <LoginForm onSubmit={this.login} />
          </div>
        ) : (
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
