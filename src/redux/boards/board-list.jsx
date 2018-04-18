export default function Reducer(
   state={
      fetching: false,
      fetched: false,
      boards: [],
      error: null,
   }, action) {
   switch (action.type) {
      case "FETCH_BOARDS_PENDING": {
         return {...state, fetching: true}
         break;
      }
      case "FETCH_BOARDS_REJECTED":{
         return {...state, fecthing: false, error: action.payload}
         break;
      }
      case "FETCH_BOARDS_FULFILLED": {
         return {
            ...state,
            fecthing: false,
            fetched: true,
            boards: action.payload,
            }
         break;
      }
   }
   return state;
};
