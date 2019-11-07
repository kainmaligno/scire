import React       from 'react';
import CircleImage from '../CircleImage';
import SideBarDoctor from '../ButtonDoctoralia';

const Doctor = ( props ) => {
    let { src, name, title, cedula, info, width, border } = props.data;
    return(
        <div>
            <CircleImage
                src   = { src }
                width = { width }
                border = { border }
            />
            <p>{ name }</p>
            <p>{ title }</p>
            <p>{ cedula  }</p>
            {
                info.map( (par, i) => {
                    return <p key = { i }>{ par }</p>
                })
            }
            <SideBarDoctor/>
        </div>
    )
}


export default Doctor;