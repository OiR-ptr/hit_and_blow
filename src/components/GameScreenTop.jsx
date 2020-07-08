import React, { useEffect, useCallback } from "react";
import MenuBar from "./MenuBar";
import NumberInventory from "../containers/NumberInventoryContainer";
import PlayMat from "../containers/PlayMatContainer";
import { useDispatch } from "react-redux";
import { initializeGameruleEvent } from "../actions/GameActions";
import HistoryLog from "./HistoryLog";

const GameScreen = (props) => {
  const { initializeGameRule } = props;

  useEffect(() => {
    initializeGameRule(4, 9, false);
  }, [initializeGameRule]);

  return (
    <>
      <MenuBar />
      <NumberInventory />
      <PlayMat />
      <HistoryLog />
    </>
  );
};

const useStateProps = () => {
  return {};
};

const useDispatchProps = () => {
  const dispatch = useDispatch();

  const initializeGameRule = useCallback(
    (dialLength, maxNumber, hasDuplicable) => {
      dispatch(initializeGameruleEvent(dialLength, maxNumber, hasDuplicable));
    },
    [dispatch]
  );

  return {
    initializeGameRule,
  };
};

const GameScreenContainer = (props) => {
  const _props = { ...useStateProps(), ...useDispatchProps(), ...props };
  return <GameScreen {..._props} />;
};

export default GameScreenContainer;
