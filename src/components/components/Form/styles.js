import styled from 'styled-components';

export const Space = styled.form`
    margin-left     : 20%;
    width           : 60%;
`


export const SelectSpace = styled.div`
    align-items    : center;
    display        : flex;
    flex-direction : row;
    justify-content: space-between;
    margin-top     : 2em;
    margin-bottom  : 2em;
    @media ( max-width: 900px ){
        flex-direction: column;
    }
    select{
        width:49%;
        border       : 1px solid #B0B0B0;
    border-radius: 4px;
    outline      : none;
    }
`

export const Subtitle = styled.div`
    margin-top: -45px; 
    text-align: center;   
    width     : 100%;
`

export const Section = styled.div`
    align-items    : flex-end;
    display        : flex;
    justify-content: space-between;
    flex-direction : row;
    width          : 100%;
    @media ( max-width: 700px ){
        flex-direction: column;
    }
`
export const InputSpace = styled.div`
display        : flex;
flex-direction : column;
justify-content: space-evenly;
margin         : 10px 0px;
width          : 45%;
`
export const InputElem = styled.input`
    border       : 1px solid #B0B0B0;
    border-radius: 4px;
    padding      : 10px 10px;
    outline      : none;
    width        : 100%;
`
 export const Span = styled.span`
    color    : #313131;
    font-size: 18px;
`
export const SpanViolet = styled.span`
    color    : #72295E;
    cursor   : pointer;
    font-size: 14px;
    @media ( max-width: 900px ){
       margin: 10px 0px;
    }
`

export const EstudiosSpace = styled.div`
    display        : flex;
    flex-direction : column;
    justify-content: flex-start;
    margin-top     : 10px;
    margin-bottom  : 2em;
`

export const Title = styled.span`
    margin-bottom: 5px;
`
export const TextArea = styled.textarea`
    height: 100px;
    border       : 1px solid #B0B0B0;
    border-radius: 4px;
    padding      : 10px 10px;
    outline      : none;
`
export const P = styled.p`
    font-size: 14px;
    width    : 100%;
`
export const Action = styled.div`
    align-items    : center;
    display        : flex;
    justify-content: center;
    width          : 100%;
`

export const Btn = styled.button`
    background-color: #72295E;
    border          : none;
    border-radius   : 5px;
    color           : #FFF;
    cursor          : pointer;
    font-size       : 18px;
    margin-bottom   : 20px;
    outline         : none;
    padding         : 10px;
    width           : 200px;
`