import React from 'react';
import Cell from './Cell';



const Stage = ({stage}) => (
    <div>{stage.map(row =>row.map((cell,x) => <Cell key = {x} type = {cell[0]}/>))}</div>  //type是cell单元格中的第一个值
)

export default Stage;
