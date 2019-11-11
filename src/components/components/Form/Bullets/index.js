import React         from "react";
import InputCheckbox from '../InputCheckbox';
import { Space, Inputs,Span } from './styles';


const Bullets = ( props ) => {
    let { text, textBOne, textBTwo, actions, values } = props;
    let { Si, No, Consulta, Estudio } = actions;
    let { si, no, consulta, estudio  } = values;
    return(
        <Space>
            <Span>{ text }<sup>*</sup></Span>
            <Inputs>
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
            </Inputs>
        </Space>
    )
}

export default Bullets;