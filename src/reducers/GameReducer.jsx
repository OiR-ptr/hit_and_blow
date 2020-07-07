import { SELECT_NUMBER, SET_NUMBER } from "../actions/GameActions";

const initialState = {
  selected: 0,
  dial: [0, 0, 0, 0],
};

export default function gameReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_NUMBER:
      return Object.assign({}, state, {
        selected: action.number,
      });

    case SET_NUMBER:
      const cpDial = state.dial.slice();
      cpDial[action.position] = action.number;
      return Object.assign({}, state, {
        dial: cpDial,
      });

    default:
      break;
  }
  return state;
}
