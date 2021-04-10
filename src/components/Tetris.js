import React, { useState } from "react";

import { createStage, checkCollision } from "../gameHelper";
//Compoments
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
//styled Components
import { StyledTetrisWrapper, StyledTetrise } from "./styles/StyledTetris";

//Custom Hooks
import { useStage } from "../hooks/useStage";
import { usePlayer } from "../hooks/usePlayer";

const Tetris = () => {
  const [dropTime, setDropTime] = useState();
  const [gameOver, setGameOver] = useState(false);

  const [player, updataPlayerPos, resetPlayer] = usePlayer(); //pos,tetrominos
  const [stage, setStage] = useStage(player);

  console.log("re-render");
  const movePlayer = (din) => {
    if (!checkCollision(player, stage, { x: din, y: 0 })) {
      updataPlayerPos({ x: din, y: 0 }); //左右移动
    }
  };
  const startGame = () => {
    setStage(createStage()); //重新构建stage
    resetPlayer();
    setGameOver(false)
  };
  const drop = () => {
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updataPlayerPos({ x: 0, y: 1, collided: false });
    } else {
      if(player.pos.y < 1){

        console.log('Game Over!')
        setGameOver(true);
        setDropTime(null);
      }
      updataPlayerPos({ x: 0, y: 0, collided: true });
    }
  };
  const dropPlayer = () => {
    drop();
  };
  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        //左移动
        movePlayer(-1);
      } else if (keyCode === 39) {
        //右移
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      }
    }
  };
  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={(e) => move(e)}>
      <StyledTetrise>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} />
          ) : (
            <div>
              <Display text="Score" />
              <Display text="Rows" />
              <Display text="Level" />
            </div>
          )}
          <StartButton onClick={startGame} />
        </aside>
      </StyledTetrise>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
