import React from 'react';
import {StyledStartButton} from './styles/StyledStartButton'

const StartButton = ({callBack}) => (
 <StyledStartButton onClick = {callBack} >start Game</StyledStartButton>   
)

export default StartButton;