import React from "react";

//Compoments
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

import {createStage} from '../gameHelper'
const Tetris = () => {
  return (
    <div>
      <Stage stage = {createStage()} />
      <aside>
        <div>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level" />
        </div>
        <StartButton />
      </aside>
    </div>
  );
};

export default Tetris;
