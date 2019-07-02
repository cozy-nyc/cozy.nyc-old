import React from 'react';
import Loadable from 'react-loadable';

const BoardsCategoriesLoadable = Loadable({
  loader: () => import('./Categories' /* webpackChunkName: 'boards' */).then(module => module.default),
  loading: () => <div>Loading</div>
});

const BoardLoadable = Loadable({
  loader: () => import('./Board' /* webpackChunkName: 'boards' */).then(module => module.default),
  loading: () => <div>Loading</div>
});

const BoardsThreadLoadable = Loadable({
  loader: () => import('./Thread' /* webpackChunkName: 'boards' */).then(module => module.default),
  loading: () => <div>Loading</div>
});

export BoardsCategoriesLoadable, BoardLoadable, BoardsThreadLoadable;
