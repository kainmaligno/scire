import React from "react"
import styled from "styled-components"
import map from "../../../images/gatsby-astronaut.png"
import marker from "../../../images/mapa_pin.svg"
import phone from "../../../images/icon_tel.svg"
import mail from "../../../images/email.svg"

const Footer = () => (
  <div>
    <FooterHeader>
      <FooterContainer>
        <Marker>
          <img src={map} width="200px" height="200px" />
          <div>
            <img src={marker} width="30px" />
            <p>
              Torres Médicas Angelópolis Periférico Ecológico 3507, <br />
              Reserva Territorial Atlixcáyotl, 72830,
              <br /> San Andres Cholula, Puebla, México.
            </p>
          </div>
        </Marker>
        <ContactContainer>
          <p>CONTÁCTANOS:</p>
          <div>
            <ContactImages>
              <img src={phone} />
              <img src={mail} />
            </ContactImages>
            <Contact>
              <ul>
                <li>22 21691 802 </li>
                <li>22 2715 3842 </li>
                <li>.</li>
                <li>contacto@scire.com.mx</li>
              </ul>
            </Contact>
          </div>
        </ContactContainer>
      </FooterContainer>
      <Info>
        SITIO 100% SEGURO. TU INFORMACIÓN ES CONFIDENCIAL Y ESTÁ COMPLETAMENTE
        PROTEGIDA.
      </Info>
    </FooterHeader>
    <FooterBottom>
      SCIRE ® Todos los derechos reservados. Desarrollado por Spartan Dev.
    </FooterBottom>
  </div>
)

export default Footer

const FooterHeader = styled.div`
  height: auto;
  padding: 2% 0;
  width: 100%;
  background: linear-gradient(177.39deg, #492241 0%, #261b23 100%);
  color: #ae9caa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const FooterBottom = styled.div`
  height: 10%;
  background-color: #261b23;
  color: #ae9caa;
  font-family: "Walkway SemiBold";
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  text-align: center;
  @media (max-width: 930px) {
    font-size: 11px;
  }
`
const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 90%;
  width: 90%;
  @media (max-width: 930px) {
    justify-content: center;
    margin-top: 5%;
  }
`
const Marker = styled.div`
  width: 55%;
  justify-content: space-between;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  div {
    margin-top: 20px;
    //margin-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      color: #ae9caa;
      font-family: "Walkway SemiBold";
      font-size: 20px;
    }
  }
`
const ContactContainer = styled.div`
  margin: 10px 0;
  padding-right: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    width: 90%;
    text-align: center;
    color: #9b79c1;
    font-family: "Gotham Condensed";
    font-size: 18px;
  }
  div {
    display: flex;
    height: 95%;
  }
  @media (max-width: 930px) {
    padding-right: 0;
  }
`
const ContactImages = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 30px;
    margin: 10px;
  }
`
const Contact = styled.aside`
  display: flex;
  flex-direction: column;
  img {
    width: 30px;
  }
  ul {
    list-style-type: none;
    padding: 0 40px;
  }
`
const Info = styled.div`
  color: #ae9caa;
  font-family: "Walkway SemiBold";
  font-size: 16px;
  text-align: center;
  @media (max-width: 930px) {
    margin-top: 20px;
  }
`
