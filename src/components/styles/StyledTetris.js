import styled from "styled-components";

import bgImage from "../../img/bg.png";

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  background-repeat:repeat;
  overflow: hidden;
`;
export const StyledTetrise = styled.div`
    display:flex;
    padding: 40px;
    margin: 0 25vw auto; 
    max-width: 900px;
    aside {
        max-width: 200px;
        display:block;
        padding: 0 20px
    }
`;

