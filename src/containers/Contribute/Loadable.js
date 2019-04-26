import React from 'react';
import Loadable from 'react-loadable';

const ContributeLoadable = Loadable({
  loader: () => import('./Contribute' /* webpackChunkName: 'contribute' */).then(module => module.default),
  loading: () => <div>Loading</div>
});

export default ContributeLoadable;
