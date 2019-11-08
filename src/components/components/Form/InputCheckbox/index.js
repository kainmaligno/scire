import React from 'react';

const InputCheckbox = ( props ) => {
    let { text, action, value } = props;
    
    function setChange( e ){
        console.log( 'cambio' );
        action( e.target.value );
    }
    return(
        <div>
            <input type="checkbox" onChange = { setChange } checked = { value }/>
            <span>{ text }</span>
        </div>
    )
}

export default InputCheckbox;