import {useCallback, useState} from 'react'
import { STAGE_WIDTH } from '../gameHelper';
import {randomTetromions} from '../tetrominos'

export const usePlayer = () => {
    const [player,setPlayer] = useState({
        pos : {x:0,y:0},
        tetromino: randomTetromions().shape,
        collided: false  //碰撞属性
    });
    const updataPlayerPos = ({x,y,collided}) => {
        setPlayer(prev => ({
            ...prev,
            pos : {x : (prev.pos.x += x), y: (prev.pos.y += y)},
            collided
        }))
    }
    const resetPlayer = useCallback( () => {
        setPlayer({
            pos : {x : STAGE_WIDTH / 2 - 2 , y : 0},
            tetromino:randomTetromions().shape,
            collided : false
        })
    })

    return [player,updataPlayerPos,resetPlayer];

}