import { useCallback, useState } from "react";
import { checkCollision, STAGE_WIDTH } from "../gameHelper";
import { randomTetromions, TETROMINOS } from "../tetrominos";

export const usePlayer = () => {
  let [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape, //不会显示tetromions
    collided: false, //碰撞属性
  });
  const updataPlayerPos = ({ x, y, collided }) => {
    setPlayer((prev) => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided,
    }));
  };
  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 }, //默认从中间出现
      tetromino: randomTetromions().shape,
      collided: false,
    });
  }, []);

  const rotate = (matrix,dir) => {
      
      const rotatedTetromion = matrix.map((_,index) => {
          matrix.map(col => col[index]) //让 行变为列
      })
      if(dir > 0){
          return rotatedTetromion.map(row => row.reverse());
      }
      return rotatedTetromion.reverse()
  }

  const playerRotate = (stage,dir) => {
      const clonedPlayer = JSON.parse(JSON.stringify(player));
      console.log(clonedPlayer.tetromino)
      clonedPlayer.tetromino = rotate(clonedPlayer.tetromino,dir);

      const pos = clonedPlayer.pos.x;
      let offset = 1;
      while(checkCollision(clonedPlayer,stage,{x:0,y:0})) {
          clonedPlayer.pos.x += offset;
          offset = -(offset + offset > 0 ? 1 : -1);
          if(offset > clonedPlayer.tetromino[0].length) {
              rotate(clonedPlayer.tetromino,-dir);
              clonedPlayer.pos.x = pos;
              return;
          }
      }
      setPlayer(clonedPlayer)
  }

  return [player, updataPlayerPos, resetPlayer,playerRotate];
};
