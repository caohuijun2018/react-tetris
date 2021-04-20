import React from 'react'

import {StyledDisplay} from './styles/StyledDisplay'
const Display = ({gameOver,text,gameWin}) => (
    
    <StyledDisplay gameOver = {gameOver} gameWin = {gameWin}>{text}</StyledDisplay>
)
export default Display;