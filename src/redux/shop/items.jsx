export default function Reducer(
   state={
      activeitem: {
        fetching: false,
        fetched: false,
        id: -1,
        slug: "n"
      },
      fetching: false,
      fetched: false,
      items: [],
      error: null,
   }, action) {
   switch (action.type) {
      case "FETCH_ITEMS_PENDING": {
         return {...state, fetching: true}
         break;
      }
      case "FETCH_ITEMS_REJECTED":{
         return {...state, fecthing: false, error: action.payload}
         break;
      }
      case "FETCH_ITEMS_FULFILLED": {
         return {
            ...state,
            fecthing: false,
            fetched: true,
            items: action.payload,
            }
         break;
      }
   }
   return state;
};
