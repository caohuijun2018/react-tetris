import styled from "styled-components";

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${(props) => props.height},    
    calc(25vw / ${(props) => props.width})   
  );
  grid-template-columns: repeat(${(props) => props.width}, 1fr);
  width: 100%;
  max-width: 25vw;
  
`;
// calc(25vw / ${(props) => props.width})    宽度的比例