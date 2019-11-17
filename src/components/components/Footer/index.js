import React from "react"
import styled from "styled-components"
import marker from "../../../images/mapa_pin.svg"
import phone from "../../../images/icon_tel.svg"
import mail from "../../../images/email.svg"

const Footer = () => (
  <div>
    <FooterHeader>
      <FooterContainer>
        <Marker>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d942.9954978466338!2d-98.2651678!3d19.0205152!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc79e11261859%3A0xae0be8a01f34c4eb!2sTorres%20M%C3%A9dicas%20Angel%C3%B3polis!5e0!3m2!1ses-419!2smx!4v1573449728785!5m2!1ses-419!2smx"
            width="200"
            height="200"
            allowFullScreen={true}
            title="map"
          ></iframe>
          <div>
            <img src={marker} width="30px" alt="icon_marker" />
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
              <img src={phone} alt="icon_phone" />
              <img src={mail} alt="icon_mail" />
            </ContactImages>
            <Contact>
              <ul>
                <li>22 21691 802 </li>
                <li>22 2715 3842 </li>
                <li className="space">.</li>
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
      SCIRE ® Todos los derechos reservados. Desarrollado por Spartans Dev.
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      line-height: 22px;
      color: #ae9caa;
      font-family: "Walkway SemiBold";
      font-size: 20px;
    }
  }
`
const ContactContainer = styled.div`
  margin: 10px 0;
  padding-right: 10%;
  padding-top: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    width: 85%;
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
  img {
    width: 30px;
    margin: 6px;
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
    line-height: 18px;
    .space {
      font-size: 1px;
    }
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
