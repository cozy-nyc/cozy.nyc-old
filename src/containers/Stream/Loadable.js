import React from 'react';
import Loadable from 'react-loadable';

const StreamLoadable = Loadable({
  loader: () => import('./Stream' /* webpackChunkName: 'stream' */).then(module => module.default),
  loading: () => <div>Loading</div>
});

export default StreamLoadable;
