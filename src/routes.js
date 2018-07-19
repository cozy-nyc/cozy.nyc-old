import { routerActions } from 'react-router-redux';
import { connectedReduxRedirect } from 'redux-auth-wrapper/history4/redirect';
import { App, NotFound } from 'containers';
import About from 'containers/about/about';
import Login from 'containers/login/loadable';
import LoginSuccess from 'containers/LoginSuccess/Loadable';
import Register from 'containers/Register/Loadable';

import Home from './containers/home/home';

// Shop
import Shop from './containers/shop/index';
import Item from './containers/shop/itemdetail';

// Radio
import RadioHome from './containers/radio/index';
import Stream from './containers/radio/stream';

// Boards
import BoardsHome from './containers/boards/index';
import Board from './containers/boards/board';
import Thread from './containers/boards/thread';

import UserProfile from './containers/profile/index';

const isAuthenticated = connectedReduxRedirect({
  redirectPath: '/login',
  authenticatedSelector: state => state.auth.isLogin === true,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated'
});

const isNotAuthenticated = connectedReduxRedirect({
  redirectPath: '/',
  authenticatedSelector: state => state.auth.isLogin === false,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated',
  allowRedirectBack: false
});

const routes = [
  {
    component: App,
    routes: [
      { path: '/', exact: true, component: Home },
      { path: '/about', exact: true, component: About },
      { path: '/shop', exact: true, component: Shop },
      { path: '/shop/:itemid', component: Item },
      { path: '/radio', exact: true, component: RadioHome },
      { path: '/radio/:channelname', exact: true, component: Stream },
      { path: '/boards', exact: true, component: BoardsHome },
      { path: '/boards/:boardtag', exact: true, component: Board },
      { path: '/boards/:boardtag/:threadid', exact: true, component: Thread },
      { path: '/u/:username', exact: true, component: UserProfile },
      { path: '/login', exact: true, component: Login },
      { path: '/login-success', exact: true, component: isAuthenticated(LoginSuccess) },
      { path: '/register', exact: true, component: isNotAuthenticated(Register) },
      { component: NotFound }
    ]
  }
];

export default routes;
