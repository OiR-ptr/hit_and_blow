export const INITIALIZE_GAMERULE = "INITIALIZE_GAMERULE";
export const SELECT_NUMBER = "SELECT_NUMBER";
export const SET_NUMBER = "SET_NUMBER";
export const CHECK_NUMBERS = "CHECK_NUMBERS";

export function initializeGameruleEvent(dialLength, maxNumber, hasDuplicable) {
  return {
    type: INITIALIZE_GAMERULE,
    dialLength,
    maxNumber,
    hasDuplicable,
  };
}

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

export function checkNumbersEvent(numbers) {
  return {
    type: CHECK_NUMBERS,
    numbers,
  };
}
