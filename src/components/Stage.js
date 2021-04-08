import React from 'react';
import Cell from './Cell';
import {StyledStage} from './styles/Styledstage'


const Stage = ({stage}) => (
    <StyledStage width={stage[0].length} height={stage.length}>{stage.map(row =>row.map((cell,x) => <Cell key = {x} type = {cell[0]}/>))}</StyledStage>  //type是cell单元格中的第一个值
)

export default Stage;
