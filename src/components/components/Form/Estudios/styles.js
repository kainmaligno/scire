import styled from "styled-components";


export const Space = styled.div`
    display       : flex;
    flex-direction: column;
    margin        : 5px 0px;
    width         : 100%;
`

export const Span = styled.span`
    color    : #72295E;
    cursor   : pointer;
    font-size: 14px;
    @media ( max-width: 900px ){
       margin: 10px 0px;
    }
`

export const Select = styled.select`
    width  : 60%;
    @media ( max-width: 700px ){
        width: 100%;
    }
`

export const SelectSpace = styled.div`
    align-items    : center;
    display        : flex;
    flex-direction : row;
    justify-content: space-between;
    margin-top     : 5px;
    @media ( max-width: 900px ){
        flex-direction: column;
    }
   
`
export const EstudiosSpace = styled.div`
    display        : flex;
    flex-direction : column;
    justify-content: flex-start;
    margin-top     : 10px;
`

export const Title = styled.span`
    margin-bottom: 5px;
`
export const TextArea = styled.textarea`
    height: 100px;
`