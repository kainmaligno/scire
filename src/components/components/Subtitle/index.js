import React     from 'react';
import { Space } from './styles';

const Subtitle = ( props ) => {
    let { text } = props;
    return(
        <Space>{ text }</Space>
    )
}

export default Subtitle;