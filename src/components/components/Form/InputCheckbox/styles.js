import styled from 'styled-components';

export const Space = styled.div`
    align-items   : center;
    display       : flex;
    flex-direction: row;
`

export const Span = styled.p`
    margin-left: 10px;
    width      : ${ props => props.firstWid || 'auto' };
`