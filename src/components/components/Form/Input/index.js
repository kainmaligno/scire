import React          from 'react'
import { InputSpace, InputElem, Span } from './styles';

const Input = ( props ) => {
    let { action, label, required, margin, value, width } = props;
    return(
        <InputSpace width = { width }>
            <Span>{ label }{ required ? <sup>*</sup>: null }</Span>
            <InputElem type = "text" value = { value } onChange = { action } width = { width }/>
        </InputSpace>
    )
}

export default Input;