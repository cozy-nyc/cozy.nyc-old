import React from 'react';
import Loadable from 'react-loadable';

const BoardsLoadable = Loadable({
  loader: () => import('./Boards' /* webpackChunkName: 'boards' */).then(module => module.default),
  loading: () => <div>Loading</div>
});

export default BoardsLoadable;
