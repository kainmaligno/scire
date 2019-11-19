import styled  from "styled-components";


export const Space = styled.div`
    align-items    : center;
    display        : flex;
    justify-content: flex-start;
    flex-direction : row;
    margin         : 0px 0px 10px 0px;
    width          : 100%;
    @media (max-width: 900px){
        flex-direction: column;
    }
`

export const Inputs = styled.div`
    align-items    : center;
    display        : flex;
    flex-direction : row;
    justify-content: space-around;
    margin-top     : 20px;
    width          : 50%;
    @media (max-width: 900px){
        flex-direction: row;
        justify-content: center;
        width:100%;
    }
    @media ( max-width: 400px ){
        flex-direction: column;
        width:auto;
    }

`

export const Span = styled.span`
    width: 30%;
    @media( max-width: 900px ){
        text-align: center;
        width     : 100%;
    }
`