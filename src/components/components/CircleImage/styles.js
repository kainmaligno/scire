import styled  from "styled-components";
import pallete from "../../pallete";

/*
    border      - border of the div
    borderStyle - solid, dashed, etc.
    colorStyle  - color of the div
*/

export const Circle = styled.div`
    border: ${ props => props.border || '0px'} ${ props => borderStyle || 'solid'} ${ props => props.colorStyle}
    width : ${ props => props.width }
`
