import React from 'react';
import Loadable from 'react-loadable';

const DiscoveryHome = Loadable({
  loader: () => import('./DiscoveryHome' /* webpackChunkName: 'stream' */).then(module => module.default),
  loading: () => <div>Loading</div>
});

export default DiscoveryHome;
