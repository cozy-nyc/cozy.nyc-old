import React from 'react';
import Loadable from 'react-loadable';

const ProfileLoadable = Loadable({
  loader: () => import('./Profile' /* webpackChunkName: 'profile' */).then(module => module.default),
  loading: () => <div>Loading</div>
});

export default ProfileLoadable;
