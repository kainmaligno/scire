import React from "react"
import "./header.css"
import PropTypes from "prop-types"
import Navbar from "../Navbar"
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Button from "../../styledComponents/Button"
//todo al contenedor de informacion hacer position relative y z-index *2 
const Header = ({ siteTitle, image }) => (

  <header>
    <Navbar />
    <div className="hero">
     <Img 
     title="header"
     alt="neuro Scire header" 
     fluid={image.childImageSharp.fluid}
     style={{
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%"
    }}
     />
     <div className="infoContainer">
      <div className="innerTitle-container">
        <p className="innerTitle">
                  Una empresa creada
          por seres humanos
          para el cuidado y la salud de
          otros seres humanos
        </p>
      </div>
      <div className="innerText-container">
          <p className="innerText">
          Somos una empresa mexicana de servicios de salud especializada en estudios de diagnóstico neurofisiológico y neurología.
          </p>
      </div>
      <div className="button-container">
          <Button><p>AGENDA TU CITA</p></Button>
      </div>
    </div>
    </div>
   
  </header>
)
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
