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
import { useInterval } from "../hooks/useInterval";
import { useGameStatus } from "../hooks/useGameStatus";
const Tetris = () => {
  const [dropTime, setDropTime] = useState();
  const [gameOver, setGameOver] = useState(false);

  const [player, updataPlayerPos, resetPlayer, playerRotate] = usePlayer(); //pos,tetrominos
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
    rowsCleared
  );

  console.log("re-render");
  const movePlayer = (din) => {
    if (!checkCollision(player, stage, { x: din, y: 0 })) {
      updataPlayerPos({ x: din, y: 0 }); //左右移动
    }
  };
  const startGame = () => {
    setStage(createStage()); //重新构建stage
    resetPlayer();
    setGameOver(false);
    setDropTime(1000);
    setScore(0);
    setLevel(0);
    setRows(0);
  };

  const drop = () => {
    if (rows > (level + 1) * 3) {
      setLevel((prev) => prev + 1);

      setDropTime(1000 / (level + 1) + 200);
    }
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updataPlayerPos({ x: 0, y: 1, collided: false });
    } else {
      if (player.pos.y < 1) {
        alert("Game Over!");
        console.log("Game Over!");
        setGameOver(true);
        setDropTime(null);
      }
      updataPlayerPos({ x: 0, y: 0, collided: true });
    }
  };
  const dropPlayer = () => {
    drop();
  };

  const keyup = ({ keyCode }) => {
    //松开上键时，恢复自动下降
    if (!gameOver) {
      if (keyCode === 40) {
        setDropTime(1000);
      }
    }
  };
  useInterval(() => {
    drop();
  }, [dropTime]);
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
        setDropTime(300); //当用户按住下键时，取消自动下降
      } else if (keyCode === 38) {
        console.log("上键");
        playerRotate(stage, 1);
      }
    }
  };

  return (
    <StyledTetrisWrapper
      role="button"
      tabIndex="0"
      onKeyDown={(e) => move(e)}
      onKeyUp={keyup}
    >
      <StyledTetrise>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} />
          ) : (
            <div>
              <Display text={`Scorce : ${score}`} />
              <Display text={`Rows : ${rows}`} />
              <Display text={`Level : ${level}`} />
            </div>
          )}
          <StartButton onClick={startGame} />
        </aside>
      </StyledTetrise>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
