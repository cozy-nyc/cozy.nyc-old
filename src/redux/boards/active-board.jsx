export default function Reducer(
   state={
      tag: '',
      fetching: false,
      fetched: false,
      threads: [],
      error: null,
   }, action) {
   switch (action.type) {
      case "FETCH_THREADS_PENDING": {
         return {...state, fetching: true}
         break;
      }
      case "FETCH_THREADS_REJECTED":{
         return {...state, fecthing: false, error: action.payload}
         break;
      }
      case "FETCH_THREADS_FULFILLED": {
         return {
            ...state,
            fecthing: false,
            fetched: true,
            tag: action.payload.tag,
            threads: action.payload.threads,
            }
         break;
      }
   }
   return state;
};
