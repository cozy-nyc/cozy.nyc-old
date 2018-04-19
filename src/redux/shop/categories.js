export default function reducer(state = null, action) {
  switch (action.type) {
    default:
      break;
    case 'CATEGORY_SELECTED':
      return action.payload;
  }
  return state;
}
