import React from 'react';
import { Space,Calen,Span } from './styles';

const Calendar = ( props ) => {
    let { today, maxDay } = props;
    return(
        <Space>
            <Calen>
                <Span>Fecha<sup>*</sup></Span>
                <input type = "date" min = { today } max={ maxDay } value = { today }/>
            </Calen>
            <Calen>
                <Span>Segunda opción de fecha<sup>*</sup></Span>
                <input type = "date" min = { today } max={ maxDay } value = { today }/>
            </Calen>
        </Space>
    )
}

export default Calendar;