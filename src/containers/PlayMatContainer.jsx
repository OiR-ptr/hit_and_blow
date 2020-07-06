import React from "react";
import PlayMat from "../components/PlayMat";
import { useSelector, useDispatch } from "react-redux";
import { setNumberEvent } from "../actions/GameActions";

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

  return {
    setNumber,
  };
};

const PlayMatContainer = (props) => {
  const _props = { ...useStateProps(), ...useDispatchProps(), ...props };
  return <PlayMat {..._props} />;
};

export default PlayMatContainer;
