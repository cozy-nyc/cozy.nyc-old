// import multireducer from 'multireducer';
import { routerReducer } from 'react-router-redux';
import auth from './modules/auth';
import notifs from './modules/notifs';
import info from './modules/info';
import boards from './modules/boards';
import threads from './modules/threads';
import posts from './modules/posts';
import profile from './modules/profile';

export default function createReducers(asyncReducers) {
  return {
    router: routerReducer,
    online: (v = true) => v,
    notifs,
    auth,
    boards,
    threads,
    posts,
    profile,
    info,
    ...asyncReducers
  };
}
