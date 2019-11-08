import React, { useState } from "react"
import Input               from './Input';
import Bullets             from './Bullets';
import Calendar            from './Calendar';

const Form = () => {
    const [ name   , setName    ] = useState('');
    const [ edad   , setEdad    ] = useState('');
    const [ celular, setCelular ] = useState('');
    const [ fijo   , setFijo    ] = useState('');
    const [ si     , setSi      ] = useState(false);
    const [ no     , setNo      ] = useState(false);
    const [ consulta, setConsulta ] = useState( false );
    const [ estudio, setEstudio ] = useState( false );
    const [ minDay , setMinday  ] = useState('');
    const [ maxDay , setMaxday  ] = useState('');
    /* Set Name, Edad, Celular, y Fijo*/
    function Name( e ){ 
        setName( e.target.value );
     }
    function Edad( e ){ 
        setEdad( e.target.value ); 
    }
    function Celular( e ){ 
        setCelular( e.target.value ); 
    }
    function Fijo( e ){ 
        setFijo( e.target.value ); 
    }
    /* Set BUllets si o no */
    function EsPaciente( e ){
        
    }
    function Si( e ){
        setSi( !si );
        setNo( false );
    }
    function No( e ){
        setSi( false );
        setNo( !no );
    }
    function NamePaciente(){

    }
    function EdadPaciente(){

    }
    function Consulta(){
        setConsulta( !consulta )
        setEstudio( false )
    }
    function Estudio(){
        setEstudio( !estudio )
        setConsulta( false )
    }

    /* Get today */
    
        
    

   


    return(
        <div>
            <Input 
                action   = { Name }
                label    = { "Nombre" }
                required = { true }
                value    = { name }
            />
            <Input 
                action   = { Edad }
                label    = { "Edad" }
                required = { true }
                value    = { edad }
            />
            <Input 
                action   = { Celular }
                label    = { "Teléfono celular" }
                required = { true }
                value    = { celular }
            />
            <Input 
                action   = { Fijo }
                label    = { "Teléfono fijo" }
                value    = { fijo }
            />
            <Bullets 
                actions  = { { Si, No } }
                text     = { "¿Eres tú el paciente?" } 
                textBOne = { "Si" } 
                textBTwo = { "No" }
                values   = { { si, no } }
            />
            {
             no ? <div> 
                    <Input 
                        action   = { NamePaciente }
                        label    = { "Nombre del paciente" }
                        required = { true }
                    />
                    <Input 
                        action   = { EdadPaciente }
                        label    = { "Edad del paciente" } 
                        required = { true }
                    />
                  </div> : null   
            }
            <Bullets 
                actions  = { { Consulta, Estudio } }
                text     = { "¿Qué servicio requieres?" } 
                textBOne = { "Consulta" } 
                textBTwo = { "Estudio" }
                values   = { { consulta, estudio } }
            />)
            {
                estudio ? <div>
                    Elije el estudio que deseas
                </div>
                : null
            }
            
            <Calendar today = { "2019-11-07" } maxDay = { "2020-01-07"}/>
        </div>
    )
}


export default Form;