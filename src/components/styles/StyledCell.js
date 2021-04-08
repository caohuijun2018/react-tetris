import styled from "styled-components";

const StyledCell = styled.div`
    width: auto;
    background: rgba(${(props) => props.color},0.8)
    boder: ${(props) => (props.style === 0 ? "0px soild" : "4px soild")}
    boder-bottom-color: rgba(${(props) => props.color},0.1)
    boder-right-color: rgba(${(props) => props.color},1)
    boder-top-color: rgba(${(props) => props.color},1)
    boder-left-color: rgba(${(props) => props.color},0.3)
    
`;

export default StyledCell;
