import React         from "react";
import InputCheckbox from '../InputCheckbox';
import { Space }     from './styles';
import { npost } from "q";

const Bullets = ( props ) => {
    let { text, textBOne, textBTwo, actions, values } = props;
    let { Si, No, Consulta, Estudio } = actions;
    let { si, no, consulta, estudio  } = values;
    return(
        <Space>
            <span>{ text }<sup>*</sup></span>
            <InputCheckbox 
                action = { Si ? Si : Consulta }
                text   = { textBOne }
                value  = { si ? si : consulta }
            />
            <InputCheckbox 
                action = { No ? No : Estudio }
                text   = { textBTwo }
                value  = { no ? no : estudio }
            />
        </Space>
    )
}

export default Bullets;