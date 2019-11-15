import React from 'react';
import { Space,Calen,Span, Input } from './styles';
import DatePicker from './Calendar';

const Calendar = ( props ) => {
    let { today, maxDay } = props;
    return(
        <Space>
            <Calen>
                <DatePicker 
                    text = { "Fecha" }
                />
            </Calen>
            <Calen>
                <DatePicker 
                    text = { "Segunda opción de fecha" }
                />
            </Calen>
            
        </Space>
    )
}

export default Calendar;