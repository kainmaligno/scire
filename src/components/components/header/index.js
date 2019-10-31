import React from "react"
import "./header.css"
import PropTypes from "prop-types"
import Navbar from "../Navbar"
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
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
