import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import * as authActions from 'actions/auth/actions';
import * as notifActions from 'redux/modules/notifs';

/*
  Register Page

  User can create a account here.

  TODO:
    Page should redirct user if they're already logged in.

*/
@connect(
  () => ({}),
  { ...notifActions, ...authActions }
)
export default class Register extends Component {
  static propTypes = {
    location: PropTypes.shape({
      state: PropTypes.object
    }).isRequired,
    register: PropTypes.func.isRequired,
    notifSend: PropTypes.func.isRequired
  };

  getInitialValues = () => {
    const { location } = this.props;
    return location.state && location.state.oauth;
  };

  register = async data => {
    const result = await this.props.register(data);
    this.successRegister();
    return result;
  };

  successRegister = () => {
    this.props.notifSend({
      message: "You'r now registered !",
      kind: 'success',
      dismissAfter: 2000
    });
  };

  render() {
    return (
      <div className="auth-container">
        <Helmet title="register" />
        <h1>Register</h1>
        <RegisterForm onSubmit={this.register} initialValues={this.getInitialValues()} />
      </div>
    );
  }
}
