import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const TextContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  height: 100%;
  width: 100%;
  align-items: center;
  p {
    width: 46vw;
    color: #6d6d6d;
    font-family: "Walkway SemiBold";
    font-size: 26px;
    letter-spacing: 1.2px;
    line-height: 28px;
    text-align: center;
    @media (max-width: 720px) {
      font-size: 22px;
      width: 80vw;
      letter-spacing: 0px;
    }
  }
  span {
    color: #16a1b2;
    font-family: "Gotham Condensed";
    font-size: 60px;
    font-weight: 300;
    line-height: 41px;
    @media (max-width: 720px) {
      font-size: 50px;
    }
  }
`

const Ty = ({ image }) => (
  <header>
    <div className="hero">
      <Img
        title="header"
        alt=""
        fluid={image.childImageSharp.fluid}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />
      <TextContainer>
        <span> ¡GRACIAS! </span>
        <p>
          Es hora de prepararte para tu consulta o estudio. Nos pondremos en
          contacto contigo para coordinar los detalles de tu próxima cita.
        </p>
      </TextContainer>
    </div>
  </header>
)

export default Ty
