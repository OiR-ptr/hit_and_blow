import React from "react";
import MenuBar from "./MenuBar";
import NumberInventory from "./NumberInventory";
import PlayMat from "./PlayMat";

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
