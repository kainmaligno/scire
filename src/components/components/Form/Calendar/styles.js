import styled from 'styled-components';

export const Space = styled.div`
    display        : flex;
    justify-content: space-between;
    flex-direction : row;
    @media ( max-width: 700px ){
        flex-direction: column;
    }
`

export const Calen = styled.div`
    display       : flex;
    flex-direction: column;
    margin        : 5px 0px;
    width         : 45%;
    @media ( max-width: 700px ){
        width: 100%;
    }
`

export const Span = styled.span`
    margin: 5px 0px;
`
export const Input = styled.input`
    padding: 10px;
    
`