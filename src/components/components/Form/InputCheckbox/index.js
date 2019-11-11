import React     from 'react';
import { Space,Span } from "./styles";

const InputCheckbox = ( props ) => {
    let { text, action, value, firstWid } = props;
    
    function setChange( e ){
        action( e.target.value );
    }
    return(
        <Space>
            <input type="checkbox" onChange = { setChange } checked = { value }/>
            <Span firstWid = { firstWid }>{ text }</Span>
        </Space>
    )
}

export default InputCheckbox;