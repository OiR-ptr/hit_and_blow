import React from "react";
import MenuBar from "./MenuBar";
import NumberInventory from "../containers/NumberInventoryContainer";
import PlayMat from "../containers/PlayMatContainer";

const GameScreen = () => {
  return (
    <>
      <MenuBar />
      <NumberInventory />
      <PlayMat />
    </>
  );
};

export default GameScreen;
