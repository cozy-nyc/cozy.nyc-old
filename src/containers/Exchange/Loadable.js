import React from 'react';
import Loadable from 'react-loadable';

const ExchangeLoadable = Loadable({
  loader: () => import('./Exchange' /* webpackChunkName: 'exchange' */).then(module => module.default),
  loading: () => <div>Loading</div>
});

export default ExchangeLoadable;
