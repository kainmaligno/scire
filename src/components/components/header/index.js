import React from "react"
import "./header.css"
import PropTypes from "prop-types"
import Navbar from "../Navbar"
// import forest from "../../images/forest.mp4"



const Header = ({ siteTitle }) => (
  <header>
    <Navbar />
    <div className="hero">
     hola header
    </div>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header