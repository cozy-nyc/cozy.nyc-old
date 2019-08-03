import React from 'react';
import Loadable from 'react-loadable';

const StreamHome = Loadable({
  loader: () => import('./StreamHome' /* webpackChunkName: 'stream' */).then(module => module.default),
  loading: () => <div>Loading</div>
});

export const Stream = Loadable({
  loader: () => import('./Stream' /* webpackChunkName: 'stream' */).then(module => module.default),
  loading: () => <div>Loading</div>
});

export default StreamHome;
