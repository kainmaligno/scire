import styled from 'styled-components';

export const Space = styled.div`
    margin-left     : 20%;
    width           : 60%;
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