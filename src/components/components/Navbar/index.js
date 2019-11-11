import React from "react"
import styled from "styled-components"
import InstaIcon from "../../../images/insta.svg"
import FaceIcon from "../../../images/face.svg"
import CallIcon from "../../../images/tel.svg"
import Scire from "../../../images/Logo_scire.svg"
import Button from "../../styledComponents/HeaderButton"
import { Link } from "gatsby"
import pallete from "../../../pallete"

const NavWrapper = styled.div`
  height: 115px;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(109, 109, 109, 0.3);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 1%;
`
const NavContainer = styled.div`
  height: 120px;
  width: 96%;
`
const NavSocialContainer = styled.div`
  margin-bottom: 1%;
  margin-top: -1%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  img {
    margin-right: 20px;
  }
`
const NavSocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 5%;
`
const NavContactWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 200px;

  span {
    height: 16px;
    color: #72295e;
    font-family: ${pallete.fonts.gotham};
    font-size: 16px;
    font-weight: 300;
    line-height: 16px;
    text-align: center;
  }
`
const NavListContainer = styled.div`
  height: 50%;
  width: 100%;

  /* display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center; */
`

const NavListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 0px;
`
const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const UnorderList = styled.ul`
  width: 55%;
  list-style: none;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  li {
    height: 19px;
    width: 250px;
    color: #b0b0b0;
    font-family: "Gotham Condensed";
    font-size: 18px;
    font-weight: 300;
    line-height: 19px;
    text-align: center;
  }
`
const Navbar = () => (
  <NavWrapper>
    <NavContainer>
      <NavSocialContainer>
        <NavSocialWrapper>
          <img src={FaceIcon} />
          <img src={InstaIcon} />
        </NavSocialWrapper>
        <NavContactWrapper>
          <img src={CallIcon} />
          <span>22 21 69 18 02</span>
        </NavContactWrapper>
      </NavSocialContainer>

      <NavListContainer>
        <NavListWrapper>
          <Link to="/" style={{ textDecorationLine: "none" }}>
            <LogoContainer>
              <img src={Scire} alt="logo Scire" widt="150px" height="60px" />
            </LogoContainer>
          </Link>
          <UnorderList>
            <li>
              {" "}
              <Link to="/servicios" style={{ textDecorationLine: "none" }}>SERVICIOS</Link>
            </li>
            <Link to="/nosotros" style={{ textDecorationLine: "none" }}>
              <li>QUIENES SOMOS</li>
            </Link>
            
            <Link to="/preguntasfrecuentes" style={{ textDecorationLine: "none" }}> <li>PREGUNTA AL EXPERTO</li> </Link> 
            <Button>
              <span>AGENDA Y COTIZA</span>
            </Button>
          </UnorderList>
        </NavListWrapper>
      </NavListContainer>
    </NavContainer>
  </NavWrapper>
)

export default Navbar
