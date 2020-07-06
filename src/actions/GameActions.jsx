export const SELECT_NUMBER = "SELECT_NUMBER";
export const SET_NUMBER = "SET_NUMBER";

export function selectNumberEvent(number) {
  return {
    type: SELECT_NUMBER,
    number,
  };
}

export function setNumberEvent(number, position) {
  return {
    type: SET_NUMBER,
    number,
    position,
  };
}
