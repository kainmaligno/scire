import React from "react"
import { Calen } from "./styles"
import { Section } from "../styles"
import DatePicker from "./Calendar"

const Calendar = () => {
  return (
    <Section>
      <Calen>
        <DatePicker text={"Fecha"} />
      </Calen>
      <Calen>
        <DatePicker text={"Segunda opción de fecha"} />
      </Calen>
    </Section>
  )
}

export default Calendar
