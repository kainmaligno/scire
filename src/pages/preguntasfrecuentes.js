import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Pointer from "../components/styledComponents/pointer"
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

`
const FaqContainer = styled.div`
    width: 50%;
    height: auto;
    box-sizing: border-box;
    border: 1px solid rgba(176,176,176,0.5);
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
          <ul uk-accordion="collapsible: false">
            <li>
              <a className="uk-accordion-title" href="#">
                Item 1
              </a>
              <div className="uk-accordion-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </li>
            <li className="uk-open">
              <a className="uk-accordion-title" href="#">
                Item 2
              </a>
              <div className="uk-accordion-content">
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor reprehenderit.
                </p>
              </div>
            </li>
            <li>
              <a className="uk-accordion-title" href="#">
                Item 3
              </a>
              <div className="uk-accordion-content">
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat proident.
                </p>
              </div>
            </li>
          </ul>
        </FaqContainer>

        <div>
          <img src="" alt="" />
        </div>
      </FaqWrapper>
    </Layout>
  )
}

export default Preguntas
