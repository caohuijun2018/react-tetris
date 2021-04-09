import {useState} from 'react';

import {createStage} from '../gameHelper'

export const useStage = () => {
    const [stage,setStage] = useState(createStage())  //棋盘


    return[stage,setStage];
}