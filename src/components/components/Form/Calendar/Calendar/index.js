import React from 'react'
import { Input }    from './styles';
import "./styles.css";

function DatePicker( props ){
    let { text } = props;
    return(
        <div>
            <label htmlFor={text}>{ text }<sup>*</sup></label>
            <Input type="date" name="fechaCita" id={text}></Input>
        </div>
    )
}


export default DatePicker;