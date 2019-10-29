import React from "react"
import styled from "styled-components"
import map from "../../../images/gatsby-astronaut.png"
import marker from "../../../images/mapa_pin.svg"
import phone from "../../../images/icon_tel.svg"
import mail from "../../../images/email.svg"

const Footer = () => (
  <FooterWrapper>
    <Footerheader>
      <FooterContainer>
        <Marker>
          <img src={map} width="140px" height="140px" />
          <div>
            <img src={marker} />
            <p>
              Torres Médicas Angelópolis Periférico Ecológico 3507, Reserva
              Territorial Atlixcáyotl, 72830,<br/> San Andres Cholula, Puebla,
              México.
            </p>
          </div>
        </Marker>
        <div>
            <Contact>
                <img src={phone}/>
                <img src={mail}/>
                <div>
            CONTÁCTANOS:

22 21691 802
22 2715 3842

contacto@scire.com.mx
            </div>
            </Contact>
        
          
        </div>
      </FooterContainer>
      <Info>Sitio 100% seguro. Tu información es confidencial y está completamente protegida.</Info>
    </Footerheader>
    <FooterBottom>SCIRE ® Todos los derechos reservados. Desarrollado por Spartan Devs.</FooterBottom>
  </FooterWrapper>
)

export default Footer

const FooterWrapper = styled.div`
  height: 230px;
  width: 100%;
  padding: 20px 0;
  display: block;
  overflow: hidden;
`

const Footerheader = styled.div`
    height: 85%;	
    width: 100%;	
    background: linear-gradient(177.39deg, #492241 0%, #261B23 100%);}
`
const FooterBottom = styled.div`
  height: 15%;
  width: 100%;
  background-color: #261b23;
  color: #ffffff;
  font-family: "Walkway SemiBold";
  font-size: 12px;
  line-height: 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 80%;
  padding-top: 26px;
  /** estilo por div dentro de el footer header  */
  div {
    height: 80%;
    width: 46%;
    margin: 10px;
    text-align: center;
    line-height: 75px;
    font-size: 30px;
  }
`
/**estilo individual por espacio */
const Marker = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  div {
    height: 100%;
    width: 46%;
    margin: 10px;
    margin-left:30px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    p {
      height: 5.42%;
      width: 91%;
      color: #ffffff;
      font-family: "Walkway SemiBold";
      font-size: 14px;
      line-height: 15px;
      text-align:justify;
    }
  }
`

const Contact = styled.aside`
display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    height: 100%;
    padding-top: 58px;

    img{
        margin-bottom:20px;
    }
    div{
        width:50%;
    }
`
const Info = styled.div`
    margin-top: -25px;
    height: 12px;
    color: #FFFFFF;
    font-family: "Walkway SemiBold";
    font-size: 12px;
    line-height: 12px;
    text-align: center;
  
`
