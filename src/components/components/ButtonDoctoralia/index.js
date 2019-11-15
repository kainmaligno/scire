import React      from 'react';
import { Button,Img } from './styles';
import Doctoralia from "../../../images/doctoralia.png"

const ButtonDoctoralia = ( props ) => {
    let { href } = props;
    return(
        <Button>
            VER PERFIL EN DOCTORALIA <Img src={ Doctoralia } />
        </Button>
    )
}



export default ButtonDoctoralia;