import React from 'react';
import { Circle } from './styles';

const Circleimage = ( props ) => {
    let { src, width, border } = props;
    return(
        <Circle width = { width } src = { src }>
            <img src={ src } />
        </Circle>
    )
}


export default Circleimage;
