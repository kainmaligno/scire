import React     from 'react';
import { Space,Span } from "./styles";
import './styles.css';

const InputCheckbox = ( props ) => {
    let { text, action, value, firstWid } = props;
    
    function setChange( e ){
        action( e.target.value );
    }
    return(
        <Space>
            {/* <input type="checkbox" /> */}
            <label className="container">
                <input type="radio" onChange = { setChange } checked = { value } />
                <span className="checkmark"></span>
            </label>
            <Span firstWid = { firstWid }>{ text }</Span>
        </Space>
    )
}

export default InputCheckbox;