import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { TETROMINOS } from "../tetrominos";

const Cell = (
  { type } //组成部分
) => <StyledCell type={type} color={TETROMINOS[type].color} />;

export default Cell;
