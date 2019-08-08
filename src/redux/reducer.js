// import multireducer from 'multireducer';
import { routerReducer } from 'react-router-redux';
import auth from './modules/auth';
import notifs from './modules/notifs';
import info from './modules/info';
import boards from './modules/boards';
import stream from './modules/stream';
import profile from './modules/profile';
import discovery from './modules/discovery';

export default function createReducers(asyncReducers) {
  return {
    router: routerReducer,
    online: (v = true) => v,
    notifs,
    auth,
    boards,
    stream,
    discovery,
    profile,
    info,
    // errorHandler,
    ...asyncReducers
  };
}
