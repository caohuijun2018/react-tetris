import React from "react";
import {StyledCell} from "./styles/StyledCell";
import {TETROMINOS} from "../tetrominos";

const Cell = (
  { type } //组成部分
 
) => <StyledCell type={'L'}  color = {TETROMINOS['I'].color}>{console.log(TETROMINOS)}cell</StyledCell>;

export default Cell;
