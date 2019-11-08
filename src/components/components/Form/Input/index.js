import React from 'react'
import { InputSpace } from './styles';

const Input = ( props ) => {
    let { action, label, required, value } = props;
    return(
        <InputSpace>
            <span>{ label }{ required ? <sup>*</sup>: null }</span>
            <input type = "text" value = { value } onChange = { action }/>
        </InputSpace>
    )
}

export default Input;