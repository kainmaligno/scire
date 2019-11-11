import React            from 'react';
import ButtonDoctoralia      from '../ButtonDoctoralia';
import SideImg               from './SideImg';
import { Side, Images, Img } from './styles';

const SideBarDoctor = ( props ) => {
    let { logos } = props;
    return(
        <Side>  
            <ButtonDoctoralia />
            <Images>
                {/* {
                    logos.map( logo => {
                        return  <Img src = { logo } />
                    })
                } */}
            </Images>
        </Side>
    )
}

export default SideBarDoctor;