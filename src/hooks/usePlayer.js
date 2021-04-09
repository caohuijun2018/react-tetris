import {useState} from 'react'
import {randomTetromions} from '../tetrominos'

export const usePlayer = () => {
    const [player,setPlayer] = useState({
        pos : {x:0,y:0},
        tetromino: randomTetromions().shape,
        collided: false  //碰撞属性
    });

    return [player];

}