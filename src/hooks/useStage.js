import { useEffect, useState } from "react";

import { createStage } from "../gameHelper";

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());
  const [rowsCleaded, setRowsCleaded] = useState(0);
  useEffect(() => {
    setRowsCleaded(0);

    const updateStage = (prevStage) => {
      // First flush the stage
      const newStage = prevStage.map((row) =>
        row.map((cell) => (cell[1] === "clear" ? [0, "clear"] : cell))
      );

      // Then draw the tetromino
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? "merged" : "clear"}`,
            ];
          }
        });
      }); 
      //上面函数的作用为：通过遍历player中的tetromion，找到需要留下来的方块的部分相对于stage的坐标(play.pos.y + tetromino.y)

      // Then check if we collided
      if (player.collided) {
        resetPlayer();   
        return sweepRows(newStage)
      }

      return newStage;
    };
    const sweepRows = (newStage) =>
      newStage.reduce((ack, row) => {
        if (row.findIndex((cell) => cell[0] === 0) === -1) {
          setRowsCleaded((prev) => prev + 1);
          ack.unshift(new Array(newStage[0].length).fill([0, "clear"])); //用压入一行新的空数组的方式，代替所有的数组向下移动
          return ack;
        }
        ack.push(row);
        return ack;
      }, []);

    setStage((prev) => updateStage(prev));
  }, [player, resetPlayer]);

  return [stage, setStage,rowsCleaded];
};
