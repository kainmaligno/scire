import React from 'react';

const Calendar = ( props ) => {
    let { today, maxDay } = props;
    return(
        <div>
            <span>Fecha<sup>*</sup></span>
            <input type = "date" min = { today } max={ maxDay } value = { today }/>
            <span>Segunda opción de fecha<sup>*</sup></span>
            <input type = "date" min = { today } max={ maxDay } value = { today }/>
        </div>
    )
}

export default Calendar;