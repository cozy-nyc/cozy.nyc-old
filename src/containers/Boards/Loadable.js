import React from 'react';
import Loadable from 'react-loadable';

const BoardsHome = Loadable({
  loader: () => import('./Categories' /* webpackChunkName: 'boards' */).then(module => module.default),
  loading: () => <div>Loading</div>
});

export const Board = Loadable({
  loader: () => import('./Board' /* webpackChunkName: 'boards' */).then(module => module.default),
  loading: () => <div>Loading</div>
});

export const Thread = Loadable({
  loader: () => import('./Thread' /* webpackChunkName: 'boards' */).then(module => module.default),
  loading: () => <div>Loading</div>
});

export default BoardsHome;
