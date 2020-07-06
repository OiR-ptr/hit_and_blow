import React from "react";
import { useDispatch } from "react-redux";
import NumberInventory from "../components/NumberInventory";
import { selectNumberEvent } from "../actions/GameActions";

const useStateProps = () => {
  return {};
  // const name = useSelector((state) => state.me.name);
  // return {
  //   name,
  // };
};

const useDispatchProps = () => {
  const dispatch = useDispatch();

  const selectNumber = React.useCallback(
    (number) => {
      dispatch(selectNumberEvent(number));
    },
    [dispatch]
  );

  return {
    selectNumber,
  };
};

const NumberInventoryContainer = (props) => {
  const _props = { ...useStateProps(), ...useDispatchProps(), ...props };
  return <NumberInventory {..._props} />;
};

export default NumberInventoryContainer;
