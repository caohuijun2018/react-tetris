import styled from "styled-components";

export const StyledDisplay = styled.div`
    box-sizing: border-box;
    display: flex;
    algin-items: center;  
    margin: 0 0 20px 0;
    padding 20px;
    border: 4px solid #333;
    min-height: 30px;
    width: 100%;
    border-radius:20px;
    color: ${props => (props.gameOver ? 'red' : '#999')};
    background: #000;
    font-family: Pixel, Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
`;

//algin-items: 在交叉轴上的对齐方式
