import styled  from "styled-components";
import pallete from "../../../pallete";

/*
    border      - border of the div
    borderStyle - solid, dashed, etc.
    colorStyle  - color of the div
*/

export const Circle = styled.div`
    border             : ${ props => props.border || '1px'} ${ props => props.borderStyle || 'solid'} ${ props => props.colorStyle};
    border-radius      : 50%;
    background-image   : url("${props => props.src }");
    background-position: center;
    background-repeat  : no-repeat;
    background-size    : cover;
    height             : 100px;
    width              : 100px;
`
