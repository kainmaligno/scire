import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'
import Pointer from '../components/styledComponents/pointer'
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

const Preguntas = () => {

    return (
        <Layout>
            <SEO title="Preguntas frecuentes"/>
            <Pointer>Pregunta al experto</Pointer>
            <div>
                <TitleHeader>PREGUNTAS FRECUENTES</TitleHeader>
            </div>
            <div>
            <div className="faq-title-dudas"/>
            <div className="faq-title-resueltas"/>
            </div>
           
            <div>
                <h1>hola preguntas frecuentes</h1>
            </div>
        </Layout>
    )
}

export default Preguntas;