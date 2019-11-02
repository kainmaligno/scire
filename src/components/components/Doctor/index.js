import React       from 'react';
import CircleImage from '../CircleImage';

const Doctor = ( props ) => {
    let { src } = props;
    return(
        <div>
            <CircleImage
                src = { src }
            />
        </div>
    )
}


export default Doctor;