import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Pointer from "../components/styledComponents/pointer"
import FAQ from "../images/foto_preguntas.png"
import FormFaq from "../components/styledComponents/FaqForm"
const TitleHeader = styled.p`
  height: 41px;
  color: #16a1b2;
  font-family: "Gotham Condensed";
  font-size: 40px;
  font-weight: 300;
  line-height: 41px;
  text-align: center;
  text-align: center;
`
const FaqWrapper = styled.div`
  padding: 0 2em 2em 8em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 769px) {
    padding: 2em 5em 2em 2em;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    padding: 2em 2em 2em 2em;
  }
`
const FaqContainer = styled.div`
  width: 50%;
  height: auto;
  box-sizing: border-box;
  border: 1px solid rgba(176, 176, 176, 0.5);

  a {
    color: #6d6d6d;
    font-family: "Walkway SemiBold";
    font-size: 20px;
    line-height: 17px;
    background-color: transparent;
    height: 38px;
    @media (max-width: 500px) {
      height: 100px;
    }
  }
  a::before {
  }
  li {
    padding: 1em;
    border-bottom: 1px solid rgba(176, 176, 176, 0.5);
  }
  li:last-child {
    border-bottom: none;
  }
  p {
    color: #6d6d6d;
    font-family: "Walkway SemiBold";
    font-size: 16px;
    line-height: 20px;
    text-align: justify;
    padding: 20px;
  }

  @media (max-width: 769px) {
    width: 90%;
  }
`

const AccordionContainer = styled.div`
  height: 77px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: rgba(176, 176, 176, 0.1);
  padding: 10px;
  @media (max-width: 500px) {
    margin-top: 20px;
    height: 288px;
  }
`
const FaqImageContainer = styled.div`
  width: 50%;
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 769px) {
    margin-left: 1em;
  }
`
const Preguntas = () => {
  return (
    <Layout>
      <SEO title="Preguntas frecuentes" />
      <Pointer>Pregunta al experto</Pointer>
      <div>
        <TitleHeader>PREGUNTAS FRECUENTES</TitleHeader>
      </div>
      <div>
        <div className="faq-title-dudas" />
        <div className="faq-title-resueltas" />
      </div>

      <FaqWrapper>
        <FaqContainer>
          <ul uk-accordion="collapsible:true">
            <li>
              <a className="uk-accordion-title" href="#">
                ¿Qué incluye la consulta de Neurología?
              </a>
              <AccordionContainer className="uk-accordion-content">
                <p>
                  Incluye la valoración médica, revisión de estudios previos (si
                  cuenta con ellos), prescripción de tratamiento y solicitud de
                  estudios si se considera necesario.
                </p>
              </AccordionContainer>
            </li>
            <li className="uk-open">
              <a className="uk-accordion-title" href="#">
                ¿Cuánto tiempo dura el estudio de electroencefalograma?
              </a>
              <AccordionContainer className="uk-accordion-content">
                <p>Tiene una duración de una hora aproximadamente.</p>
              </AccordionContainer>
            </li>
            <li>
              <a className="uk-accordion-title" href="#">
                ¿Por qué es necesario el desvelo para realizar el
                electroencefalograma?
              </a>
              <AccordionContainer className="uk-accordion-content">
                <p>
                  Existen algunas anormalidades que únicamente se observan en
                  esa etapa. Que el paciente duerma durante el estudio de
                  electroencefalograma nos permite revisar también la actividad
                  cerebral durante el sueño proporcionando mayor información
                  para su diagnóstico.
                </p>
              </AccordionContainer>
            </li>
            <li>
              <a className="uk-accordion-title" href="#">
                Tengo programado un estudio (electroencefalograma,
                electromiografía) ¿Requiero ayuno?
              </a>
              <AccordionContainer className="uk-accordion-content">
                <p>
                  No, puede realizar sus comidas de forma normal. Para conocer
                  las indicaciones y recomendaciones, visita el detalle de cada
                  estudio en nuestra sección SERVICIOS.
                </p>
              </AccordionContainer>
            </li>
            <li>
              <a className="uk-accordion-title" href="#">
                Tengo programado un electroencefalograma ¿Debo suspender mis
                medicamentos?
              </a>
              <AccordionContainer className="uk-accordion-content">
                <p>
                  No, los medicamentos deben de continuar con las dosis y
                  horarios establecidos.
                </p>
              </AccordionContainer>
            </li>
            <li>
              <a className="uk-accordion-title" href="#">
                ¿Se pueden dar medicamentos para provocar sueño en los niños que
                requieren estudios (electroencefalograma, potenciales evocados)?
              </a>
              <AccordionContainer className="uk-accordion-content">
                <p>
                  No. Los medicamentos que provocan sueño alteran los resultados
                  de los estudios, por lo tanto es, muy importante desvelarlos
                  para facilitar que duerman en el consultorio de forma natural.
                </p>
              </AccordionContainer>
            </li>
          </ul>
        </FaqContainer>

        <FaqImageContainer>
          <img
            src={FAQ}
            alt="Preguntas frecuentes"
            width="300px"
            height="300px"
          />
        </FaqImageContainer>
      </FaqWrapper>
      <FormFaq />
    </Layout>
  )
}

export default Preguntas
