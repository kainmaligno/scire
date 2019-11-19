import styled from 'styled-components';

export const Space = styled.div`
    align-items     : flex-start;
    display         : flex;
    flex-direction  : row;
    width           : 20%;
    @media( max-width: 900px ){
        justify-content: center;
        width          : 35%;
    }
    @media ( max-width: 411px ){
        flex-direction: column;
        width          : 35%;
    }

   

`

export const Span = styled.p`
    margin-top: 0px !important;
    margin-left: 10px;
    width      : ${ props => props.firstWid || 'auto' };
    @media ( max-width: 900px ){
        width:auto;
    margin-left: 30%;
    }
    @media ( max-width: 400px ){
        margin-left: 35px;
        width: 10px;
    }

`