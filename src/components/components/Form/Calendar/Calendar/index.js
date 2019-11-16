import React, { useState } from 'react'
import { Input, Super }    from './styles';
import "./styles.css";

function DatePicker( props ){
    let { text } = props;
    const [ value, setValue ] = useState('');
    return(
        <div>
            <label for={text}>{ text }<sup>*</sup></label>
            <Input type="date" name="fechaCita" id={text}></Input>
        </div>
    )
}


export default DatePicker;