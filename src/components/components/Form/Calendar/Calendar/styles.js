import styled from 'styled-components';


export const Space = styled.div`

`

export const Input = styled.input`
box-sizing: border-box;
    height: 40px;	
    width: 300px;	
    border: 1px solid #B0B0B0;	
    border-radius: 4px;	
    background-color: #FFFFFF;
    @media(max-width:768px){
        width:200px;
    }
`

export const Super = styled.div`
    background-color: #FFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
`