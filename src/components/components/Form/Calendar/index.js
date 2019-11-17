import React from 'react';
import { Space, Calen} from './styles';
import DatePicker from './Calendar';

const Calendar = () => {
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