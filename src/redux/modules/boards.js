const initialState = {
  boards: [
    {
      tag: 'g',
      name: 'general'
    },
    {
      tag: 'm',
      name: 'memes'
    },
    {
      tag: 'h',
      name: 'help'
    }
  ]
};
export default function info(state = initialState) {
  return state;
}
