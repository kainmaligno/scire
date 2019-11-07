import React     from 'react';
import { Space } from "./styles";


const Title = ( props ) => {
    let { text } = props;

    return(
        <Space>{ text }</Space>
    )

}


export default Title;