import styled  from "styled-components";


export const InputSpace = styled.div`
    display        : flex;
    flex-direction : column;
    justify-content: flex-start;
    width          : ${ props => props.width || "100%"}
`

export const InputElem = styled.input`
    border       : 1px solid #B0B0B0;
    border-radius: 4px;
    padding      : 10px 0px;
    outline      : none;
    width        : 100%;
`

export const Span = styled.span`
    color    : #313131;
    font-size: 14px;
`