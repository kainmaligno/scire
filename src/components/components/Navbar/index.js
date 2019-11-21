import React from "react"
import styled from "styled-components"
import InstaIcon from "../../../images/insta.svg"
import FaceIcon from "../../../images/face.svg"
import CallIcon from "../../../images/tel.svg"
import Scire from "../../../images/Logo_scire.svg"
import Button from "../../styledComponents/HeaderButton"
import { Link } from "gatsby"

const NavWrapper = styled.div`
  box-shadow: 0 2px 4px 0 rgba(109, 109, 109, 0.3);
  display: flex;
  justify-content: space-between;
  padding: 15px 4%;
  flex-direction: column;
  position: fixed;
  z-index: 5;
  background-color: #ffffff;
`
const NavContainer = styled.div`
  width: 92vw;
  height: 100px;
`
const NavSocialContainer = styled.div`
  margin-bottom: 1%;
  margin-top: -1%;
  height: 50%;
  display: flex;
  justify-content: flex-end;
  font-family: "Gotham Condensed";
  img {
    width: 25px;
    margin-right: 10px;
  }
`
const NavSocialWrapper = styled.div`
  display: flex;
  align-items: center;
`
const NavContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 160px;
  span {
    margin-top: 12px;
    height: 16px;
    color: #72295e;
    font-size: 16px;
  }
  @media (max-width: 900px) {
    width: 120px;
    justify-content: flex-end;
  }
`
const NavListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0px;
`
const LogoContainer = styled.div`
  margin-top: 30px;
  img {
    width: 160px;
  }
`
const MenuContainer = styled.div`
  display: none;
  margin-top: 30px;
  text-align: right;
  @media (max-width: 900px) {
    display: block;
  }
`
const MenuContent = styled.div`
  ul {
    li {
      color: #b0b0b0;
      font-family: "Gotham Condensed";
      font-size: 18px;
      font-weight: 300;
      line-height: 19px;
      list-style: none;
    }
  }
`
const UnorderList = styled.ul`
  margin-top: 50px;
  width: 60%;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1100px) {
    width: 70%;
  }
  @media (max-width: 950px) {
    width: 80%;
  }
  @media (max-width: 900px) {
    display: none;
  }
  li {
    height: 19px;
    color: #b0b0b0;
    font-family: "Gotham Condensed";
    font-size: 18px;
    font-weight: 300;
    line-height: 19px;
    text-align: center;
  }
  .active > li {
    color: #16a1b2;
    font-weight: bold;
    padding-bottom: 10px;
    background: linear-gradient(to right, #72295e 0%, #aa5397 100%) left bottom
      #ffffff no-repeat;
    background-size: 100% 5px;
  }
  .activeBtn > button {
    background-color: #eef8f9;
    border: 2px solid #16a1b2;
    &: before {
      border-radius: 7px;
      content: none;
    }
    span {
      &: hover {
        color: #16a1b2;
      }
    }
  }
`
const Navbar = () => (
  <NavWrapper>
    <NavContainer>
      <NavSocialContainer>
        <NavSocialWrapper>
          <a
            href="https://www.facebook.com/CENNSCIRE/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={FaceIcon} alt="icon_face" />
          </a>
          <a
            href="https://www.instagram.com/scire_inteligencia_medica/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={InstaIcon} alt="icon_insta" />
          </a>
        </NavSocialWrapper>
        <NavContactWrapper>
          <img src={CallIcon} alt="icon_phone" />
          <span>22 21 69 18 02</span>
        </NavContactWrapper>
      </NavSocialContainer>
      <div>
        <NavListWrapper>
          <Link to="/" style={{ textDecorationLine: "none" }}>
            <LogoContainer>
              <img src={Scire} alt="logo Scire" />
            </LogoContainer>
          </Link>
          <UnorderList>
            <Link
              to="/servicios"
              style={{ textDecorationLine: "none" }}
              activeClassName="active"
              partiallyActive={true}
            >
              <li>SERVICIOS</li>
            </Link>
            <Link
              to="/nosotros"
              style={{ textDecorationLine: "none" }}
              activeClassName="active"
            >
              <li>QUIÉNES SOMOS</li>
            </Link>
            <Link
              to="/preguntasfrecuentes"
              style={{ textDecorationLine: "none" }}
              activeClassName="active"
            >
              <li>PREGUNTA AL EXPERTO</li>
            </Link>
            <Link
              to="/agendar"
              style={{ textDecorationLine: "none" }}
              activeClassName="activeBtn"
            >
              <Button>
                <span>AGENDA Y COTIZA</span>
              </Button>
            </Link>
          </UnorderList>
          <MenuContainer className="uk-width-1-5">
            <ul className="uk-nav-default " uk-nav="multiple: true">
              <li className="uk-parent">
                <a href="#" uk-toggle="target: #menu">
                  <span uk-icon="icon: menu; ratio: 2"></span>
                </a>
              </li>
            </ul>
          </MenuContainer>
        </NavListWrapper>
      </div>
    </NavContainer>
    <MenuContent id="menu" hidden aria-hidden="true">
      <ul className="uk-nav-sub">
        <hr />
        <Link
          to="/servicios"
          style={{ textDecorationLine: "none" }}
          activeClassName="active"
        >
          <li>SERVICIOS</li>
        </Link>
        <hr />
        <Link
          to="/nosotros"
          style={{ textDecorationLine: "none" }}
          activeClassName="active"
        >
          <li>QUIÉNES SOMOS</li>
        </Link>
        <hr />
        <Link
          to="/preguntasfrecuentes"
          style={{ textDecorationLine: "none" }}
          activeClassName="active"
        >
          <li>PREGUNTA AL EXPERTO</li>
        </Link>
        <hr />
        <Link to="/agendar" style={{ textDecorationLine: "none" }}>
          <Button>
            <span>AGENDA Y COTIZA</span>
          </Button>
        </Link>
      </ul>
    </MenuContent>
  </NavWrapper>
)

export default Navbar
