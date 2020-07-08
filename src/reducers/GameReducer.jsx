import {
  INITIALIZE_GAMERULE,
  SELECT_NUMBER,
  SET_NUMBER,
  CHECK_NUMBERS,
} from "../actions/GameActions";

const initialState = {
  selected: 0,
  hasDuplicable: false,
  dial: [],
  answer: [],
  history: [],
};

export default function gameReducer(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE_GAMERULE:
      const hasDuplicable = action.hasDuplicable;
      const dial = new Array(action.dialLength).fill(0);
      const pickTable = Array(action.maxNumber + 1)
        .fill(0)
        .map((_, idx) => idx);
      const answer = dial.map((_) => {
        const pickIdx = Math.floor(Math.random() * pickTable.length);
        const num = pickTable[pickIdx];
        pickTable.splice(pickIdx, Number(!hasDuplicable));
        return num;
      });

      // console.log(answer);
      return Object.assign({}, state, {
        dial,
        answer,
        hasDuplicable,
      });

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

    case CHECK_NUMBERS:
      const pairs = state.answer.map((value, idx) => {
        return {
          value,
          idx,
          isHit: state.dial[idx] === value,
          isBlowed: false,
        };
      });

      const hit = pairs.filter((item) => item.isHit).length;
      const notHitAnswer = pairs.filter((value) => !value.isHit);
      const notHitDial = state.dial.filter((_, idx) => !pairs[idx].isHit);

      notHitDial.forEach((value) => {
        const blowItem = notHitAnswer.filter((val) => {
          return val.value === value && !val.isBlowed;
        });
        if (blowItem.length) {
          notHitAnswer[blowItem[0].idx].isBlowed = true;
        }
      });

      const blow = notHitAnswer.filter((item) => item.isBlowed).length;
      // console.log(`hit: ${hit}, blow: ${blow}, answer: ${state.answer}`);

      const history = state.history.slice();
      history.splice(0, 0, {
        numbers: action.numbers,
        key: history.length + 1,
        hit,
        blow,
      });

      return Object.assign({}, state, {
        history,
      });

    default:
      break;
  }
  return state;
}
