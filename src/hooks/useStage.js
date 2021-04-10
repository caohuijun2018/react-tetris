import { useEffect, useState } from "react";

import { createStage } from "../gameHelper";

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage()); //棋盘
    
  useEffect(() => {
      const updateStage = prevStage => {
          //flush the stage
          const newStage = prevStage.map(row => 
                row.map(cell => (cell[1] === 'clear' ? [0,'clear']: cell))
            )

            //draw the tetimino
            player.tetromino.forEach((row,y) => {
                row.forEach((value,x) => {
                    if(value !== 0) {
                        newStage[y + player.pos.y][x + player.pos.x] = [
                            value,
                            `${player.collided ? 'merged' : 'clear'},`
                        ]
                    }
                })
            });
            console.log('newstage',)
            return newStage;
      }

      setStage(prev => updateStage(prev))
  }, [player,resetPlayer]);

  return [stage, setStage];
};
