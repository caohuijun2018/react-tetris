import styled from "styled-components";

import bgImage from "../../img/bg.png";

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100wh;
  background: url(${bgImage}) #000;
  background-size: cover;
  overflow: hidden;
`;
export const StyledTetrise = styled.div`
    display:flex;
    algin-items: flex-start;
    padding: 40px;
    margin: 0 25vw auto; 
    max-width: 900px;
    aside {
        width: 100%
        max-width: 200px;
        display:block;
        padding: 0 20px
    }
`;

