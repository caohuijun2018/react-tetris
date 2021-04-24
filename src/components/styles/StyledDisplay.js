import styled from "styled-components";

export const StyledDisplay = styled.div`
    box-sizing: border-box;
    display: flex;
    algin-items: center;  
    margin: 0 0 20px 0;
    padding 20px;
    border: 2px solid #ffa500;
    min-height: 30px;
    width: 100%;
    border-radius:20px;
    color: ${props => (props.gameWin === true ? 'blue' : (props.gameOver === true ? 'red' : 'antiquewhite'))};
    font-family: Regular;
    font-size: 1.2rem;
`;

//algin-items: 在交叉轴上的对齐方式
