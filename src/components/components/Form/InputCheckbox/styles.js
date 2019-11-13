import styled from 'styled-components';

export const Space = styled.div`
    align-items     : flex-start;
    display         : flex;
    flex-direction  : row;
    width           : 20%;
    @media( max-width: 900px ){
        justify-content: center;
        width          : 50%;
    }
    @media ( max-width: 400px ){
        flex-direction: column;
        width:100%;
    }

   

`

export const Span = styled.p`
    margin-top: 0px !important;
    margin-left: 10px;
    width      : ${ props => props.firstWid || 'auto' };
    @media ( max-width: 900px ){
        width: 1550%;
    }
    @media ( max-width: 400px ){
        margin-left: 35px;
        width: 10px;
    }

`