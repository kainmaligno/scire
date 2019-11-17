import React, { useState } from "react"
import {
  Subtitle,
  Space,
  Section,
  P,
  Btn,
  Action,
  InputElem,
  Span,
  InputSpace,
  SpanViolet,
  SelectSpace,
  EstudiosSpace,
  Title,
  TextArea
} from "./styles"
import Input from "./Input"
import Doctoralia from "./Doctoralia"
import Bullets from "./Bullets"
import Calendar from "./Calendar"
import Estudios from "./Estudios"

const Form = () => {
  const [si, setSi] = useState(false)
  const [no, setNo] = useState(false)
  const [consulta, setConsulta] = useState(false)
  const [estudio, setEstudio] = useState(false)
  const [minDay, setMinday] = useState("")
  const [maxDay, setMaxday] = useState("")
  const [estudios, setEstudios] = useState(false)

  function set() {
    setEstudios(!estudios)
  }

  function Si(e) {
    setSi(!si)
    setNo(false)
  }
  function No(e) {
    setSi(false)
    setNo(!no)
  }
  function Consulta() {
    setConsulta(!consulta)
    setEstudio(false)
  }
  function Estudio() {
    setEstudio(!estudio)
    setConsulta(false)
  }

  /* Get today */
  return (
      <>
      <Subtitle>Deja tus datos y nosotros nos ponemos en contacto</Subtitle>
      <Doctoralia />
    <Space
      action="https://formspree.io/mzbbvwzz"
      method="POST"
      name="agendarCita"
    >
      <input
        type="hidden"
        name="_next"
        value="https://www.scire.com.mx/gracias/"
      />
      
      <Section>
        <InputSpace>
          <Span>Nombre</Span>
          <InputElem type="text" name="nombre" id="" />
        </InputSpace>
        <InputSpace>
          <Span>Edad</Span>
          <InputElem type="text" name="edad" id="" />
        </InputSpace>
      </Section>

      <Section>
        <InputSpace>
          <Span>Telefono Celular</Span>
          <InputElem type="text" name="telefonoCelular" id="" />
        </InputSpace>
        <InputSpace>
          <Span>Telefono Fijo</Span>
          <InputElem type="text" name="telefonoFijo" id="" />
        </InputSpace>
      </Section>
      <Bullets
        actions={{ Si, No }}
        text={"¿Eres tú el paciente?"}
        textBOne={"Si"}
        textBTwo={"No"}
        values={{ si, no }}
        firstWid={"100px"}
      />
      {no ? (
        <Section>
          <InputSpace>
            <Span>Nombre del Paciente</Span>
            <InputElem type="text" name="nombrePaciente" id="" />
          </InputSpace>
          <InputSpace>
            <Span>Edad del Paciente</Span>
            <InputElem type="text" name="edadPaciente" id="" />
          </InputSpace>
        </Section>
      ) : null}
      <Bullets
        actions={{ Consulta, Estudio }}
        text={"¿Qué servicio requieres?"}
        textBOne={"Consulta"}
        textBTwo={"Estudio"}
        values={{ consulta, estudio }}
        firstWid={"100px"}
      />
      {estudio ? (
        <div>
            <span>Elije el estudio que deseas</span>
          <SelectSpace >
            <select name="estudio requerido" className="uk-select">
              <option value="ELECTROENCEFALOGRAMA">ELECTROENCEFALOGRAMA</option>
              <option value="ELECTROMIOGRAFÍA">ELECTROMIOGRAFÍA</option>
              <option value="FIBRA ÚNICA">FIBRA ÚNICA</option>
              <option value="MONITOREO INTRAOPERATORIO">MONITOREO INTRAOPERATORIO</option>
              <option value="POTENCIALES EVOCADOS">POTENCIALES EVOCADOS</option>
              <option value="POLISOMNOGRAFÍA (ESTUDIOS DEL SUEÑO)">POLISOMNOGRAFÍA (ESTUDIOS DEL SUEÑO)</option>
              <option value="SISTEMA NERVIOSO AUTÓNOMO">SISTEMA NERVIOSO AUTÓNOMO</option>
              <option value="TAMÍZ NEONATAL">TAMÍZ NEONATAL</option>
              <option value="VELOCIDADES DE CONDUCCIÓN NERVIOSA">VELOCIDADES DE CONDUCCIÓN NERVIOSA</option>
            </select>
            <SpanViolet onClick={set}>
              ¿No conoces el nombre del estudio?
            </SpanViolet>
            
          </SelectSpace>
        
       </div>
      ) : null}

        {estudios ? <EstudiosSpace>
                    <Title>Describe el estudio que deseas<sup>*</sup></Title>
                    <TextArea  name="descripcion estudio" cols="30" row="10"/>
                </EstudiosSpace> :null}
      <Calendar today={"2019-11-13"} maxDay={"2020-01-13"} />
      <P>
        Las fechas de consulta son sugeridas y están condicionadas a la agenda
        de nuestros médicos. Nos comunicaremos contigo para confirmar la
        disponibilidad.
      </P>
      <Action>
        <Btn>Enviar</Btn>
      </Action>
    </Space>
    </>
  )
}

export default Form
