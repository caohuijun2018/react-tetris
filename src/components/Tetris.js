import React, { useState } from "react";

//Compoments
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
//styled Components
import {StyledTetrisWrapper ,StyledTetrise} from "./styles/StyledTetris";
// import { createStage } from "../gameHelper";
//Custom Hooks
import {useStage} from '../hooks/useStage';
import { usePlayer } from "../hooks/usePlayer";


const Tetris = () => {
const [dropTime,setDropTime] = useState();
const [gameOver,setGameOver] =useState(false);
 

const [player] = usePlayer();  //pos,tetrominos
const [stage,setStage] = useStage(player);

console.log('re-render')
  return (
    <StyledTetrisWrapper>
      <StyledTetrise>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver = {gameOver}/>
          ) : (
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
           )}
          <StartButton />
         
        </aside>
      </StyledTetrise>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
