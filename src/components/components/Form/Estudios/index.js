import React, { useState } from 'react'
import { Span,Select,Space,SelectSpace,EstudiosSpace, Title } from './styles';

function Estudios( props ){
    const [ estudios, setEstudios ] = useState( false );
    function set(){
        setEstudios( !estudios );
    }
    return(
        <Space>
            <span>Elije el estudio que deseas</span>
            <SelectSpace>
                <Select>
                    <option>Opcion uno</option>
                    <option>Opcion Dos</option>  
                    <option>Opcion Tres</option>  
                    <option>Opcion Cuatro</option>      
                </Select>
                <Span onClick = { set }>¿No conoces el nombre del estudio?</Span>
            </SelectSpace>
            {
                estudios ? 
                <EstudiosSpace>
                    <Title>Describe el estudio que deseas<sup>*</sup></Title>
                    <textarea></textarea>
                </EstudiosSpace>
                : null
            }
        </Space>
    )
}

export default Estudios;