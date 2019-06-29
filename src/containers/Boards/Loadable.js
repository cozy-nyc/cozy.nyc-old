import React from 'react';
import Loadable from 'react-loadable';

const BoardCategoriesLoadable = Loadable({
  loader: () => import('./BoardCategories' /* webpackChunkName: 'boards' */).then(module => module.default),
  loading: () => <div>Loading</div>
});

export default BoardCategoriesLoadable;
