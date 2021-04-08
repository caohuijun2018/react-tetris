import React from "react";

//Compoments
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

import {StyledTetrisWrapper ,StyledTetrise} from "./styles/StyledTetris";
import { createStage } from "../gameHelper";


const Tetris = () => {
  return (
    <StyledTetrisWrapper>
      <StyledTetrise>
        <Stage stage={createStage()} />
        <aside>
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          <StartButton />
        </aside>
      </StyledTetrise>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
