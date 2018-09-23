export default function Reducer(
  state = {
    id: -1,
    fetching: false,
    fetched: false,
    profileImg: "https://avatars3.githubusercontent.com/u/2263236?s=400&u=b08c40e215bdaf416f6fecc4016add2b3182f824&v=4",
    username: '',
    location:'',
    error: null
  },
  action
) {
  switch (action.type) {
    default:
      break;
    case 'FETCH_PROFILE_PENDING': {
      return { ...state, fetching: true };
    }
    case 'FETCH_PROFILE_ERROR': {
      return { ...state, fecthing: false, error: action.payload };
    }
    case 'FETCH_PROFILE_FULFILLED': {
      return {
        ...state,
        fecthing: false,
        fetched: true,
        id: action.payload.id,
        profileImg: action.payload.profileImg,
        username: action.payload.username,
        location: action.payload.location,
      };
    }
  }
  return state;
}
