export default function Reducer(
   state={
      id: -1,
      fetching: false,
      fetched: false,
      posts: [],
      error: null,
   }, action) {
   switch (action.type) {
      case "FETCH_POSTS_PENDING": {
         return {...state, fetching: true}
         break;
      }
      case "FETCH_POSTS_REJECTED":{
         return {...state, fecthing: false, error: action.payload}
         break;
      }
      case "FETCH_POSTS_FULFILLED": {
         return {
            ...state,
            fecthing: false,
            fetched: true,
            id: action.payload.id,
            posts: action.payload.posts,
            }
         break;
      }
   }
   return state;
};
