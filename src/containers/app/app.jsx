import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { push } from 'react-router-redux';
import { renderRoutes } from 'react-router-config';
import Helmet from 'react-helmet';
import { verifyToken, logout } from 'actions/auth/actions';
import config from 'config';
import NavBar from 'components/navbar/navbar';
import cookies from 'utils/cookie';


/*
  TODO:
    Need to go through
*/
@connect(
  state => ({
    user: state.auth.user,
    isLogin: state.auth.isLogin
  }),
  { logout, pushState: push, verifyToken }
)
@withRouter
export default class App extends Component {
  static propTypes = {
    route: PropTypes.objectOf(PropTypes.any).isRequired,
    location: PropTypes.objectOf(PropTypes.any).isRequired,
    isLogin: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      username: PropTypes.string
    }),
    logout: PropTypes.func.isRequired,
    pushState: PropTypes.func.isRequired,
    verifyToken: PropTypes.func.isRequired
  };

  static defaultProps = {
    user: ''
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };


  componentWillMount() {
    if (cookies.get('token') && !this.props.isLogin) {
      this.props.verifyToken();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.user && nextProps.user) {
      // login
      const redirect = this.props.location.query && this.props.location.query.redirect;
      this.props.pushState(redirect || '/login-success');
    } else if (this.props.user && !nextProps.user) {
      // logout
      this.props.pushState('/');
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    const { route } = this.props;
    const styles = require('assets/scss/main.scss');

    return (
      <div id="container">
        <Helmet {...config.app.head} />
        <NavBar />
        {renderRoutes(route.routes)}
      </div>
    );
  }
}
