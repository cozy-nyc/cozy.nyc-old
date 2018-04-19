import multireducer from 'multireducer';
import { routerReducer } from 'react-router-redux';

// Auth/User Reducers
import activeUserReducer from './user/active-user';
import usersReducer from './user/user-list';

// Boards Reducers
import BoardReducer from './boards/board-list';
import ActiveBoard from './boards/active-board';
import ActiveThread from './boards/active-thread';

// Radio Reducers
import ChannelsReducer from './radio/channels';

// Shop Reducers
import CategoryReducer from './shop/categories';
import ItemReducer from './shop/items';
import cartReducer from './shop/cart';

import auth from './modules/auth';
import notifs from './modules/notifs';
import counter from './modules/counter';
import info from './modules/info';

export default function createReducers(asyncReducers) {
  return {
    categories: CategoryReducer,
    items: ItemReducer,
    cart: cartReducer,

    // Users/auth
    activeUser: activeUserReducer,
    users: usersReducer,

    // Radio
    channels: ChannelsReducer,

    // Boards
    boards: BoardReducer,
    activeBoard: ActiveBoard,
    activeThread: ActiveThread,


    router: routerReducer,
    online: (v = true) => v,
    notifs,
    auth,
    counter: multireducer({
      counter1: counter,
      counter2: counter,
      counter3: counter
    }),
    info,
    ...asyncReducers
  };
}
