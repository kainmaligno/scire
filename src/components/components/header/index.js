import React from "react"
import "./header.css"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { Link } from "gatsby"

import Button from "../../styledComponents/Button"
//todo al contenedor de informacion hacer position relative y z-index *2
const Header = ({ image, title, body, btnInfo }) => (
  <header>
    <div className="hero">
      <Img
        title="header"
        alt=""
        fluid={image.childImageSharp.fluid}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <div className="infoContainer">
        <div className="innerTitle-container">
          <p className="innerTitle"> {title} </p>
        </div>
        <div className="innerText-container">
          <p className="innerText">{body}</p>
        </div>
        <div className="button-container">
          <Link to="/agendar" style={{ textDecorationLine: "none" }}>
            <Button>
              <p>{btnInfo}</p>
            </Button>
          </Link>
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

export default Header
