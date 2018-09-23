import multireducer from 'multireducer';
import { routerReducer } from 'react-router-redux';
import { reducer as reducerForm } from 'redux-form';

// Boards Reducers
import BoardReducer from './boards/board-list';
import ActiveBoard from './boards/active-board';
import ActiveThread from './boards/active-thread';

// Radio Reducers
import ChannelsReducer from './radio/channels';

// Profile Reducers
import ActiveProfile from './profile/active-profile';

// Shop Reducers
import CategoryReducer from './shop/categories';
import ItemReducer from './shop/items';
import cartReducer from './shop/cart';

import auth from './auth';
import notifs from './modules/notifs';
import counter from './modules/counter';
import info from './modules/info';


export default function createReducers(asyncReducers) {
  return {
    form: reducerForm,
    categories: CategoryReducer,
    items: ItemReducer,
    cart: cartReducer,

    // Radio
    channels: ChannelsReducer,

    // Boards
    boards: BoardReducer,
    activeBoard: ActiveBoard,
    activeThread: ActiveThread,

    activeProfile: ActiveProfile,

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
