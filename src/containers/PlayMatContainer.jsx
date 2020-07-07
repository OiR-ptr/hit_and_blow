import React from "react";
import PlayMat from "../components/PlayMat";
import { useSelector, useDispatch } from "react-redux";
import { setNumberEvent, checkNumbersEvent } from "../actions/GameActions";

const useStateProps = () => {
  const selectedNumber = useSelector((state) => {
    return state.game.selected;
  });

  const dial = useSelector((state) => {
    return state.game.dial;
  });

  return {
    selectedNumber,
    dial,
  };
};

const useDispatchProps = () => {
  const dispatch = useDispatch();

  const setNumber = React.useCallback(
    (number, position) => {
      dispatch(setNumberEvent(number, position));
    },
    [dispatch]
  );

  const checkNumbers = React.useCallback(
    (numbers) => {
      dispatch(checkNumbersEvent(numbers));
    },
    [dispatch]
  );

  return {
    setNumber,
    checkNumbers,
  };
};

const PlayMatContainer = (props) => {
  const _props = { ...useStateProps(), ...useDispatchProps(), ...props };
  return <PlayMat {..._props} />;
};

export default PlayMatContainer;
