import React, { useState } from 'react'
import { Span,Select,Space,SelectSpace,EstudiosSpace,Title, TextArea } from './styles';

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
                    <option>ELECTROENCEFALOGRAMA</option>
                    <option>ELECTROMIOGRAFÍA</option>  
                    <option>FIBRA ÚNICA</option>  
                    <option>MONITOREO INTRAOPERATORIO</option>     
                    <option>POTENCIALES EVOCADOS</option> 
                    <option>POLISOMNOGRAFÍA (ESTUDIOS DEL SUEÑO)</option> 
                    <option>SISTEMA NERVIOSO AUTÓNOMO</option> 
                    <option>TAMÍZ NEONATAL</option> 
                    <option>VELOCIDADES DE CONDUCCIÓN NERVIOSA</option> 
                </Select>
                <Span onClick = { set }>¿No conoces el nombre del estudio?</Span>
            </SelectSpace>
            {
                estudios ? 
                <EstudiosSpace>
                    <Title>Describe el estudio que deseas<sup>*</sup></Title>
                    <TextArea />
                </EstudiosSpace>
                : null
            }
        </Space>
    )
}

export default Estudios;