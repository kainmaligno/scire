import React, { useEffect } from "react"
import PropTypes from "prop-types"
import NavBar from "./components/Navbar"
import Footer from "./components/Footer"
import "./layout.css"
import styled from "styled-components"
import UIkit from "uikit"
import icons from "uikit/dist/js/uikit-icons"
import "uikit/dist/css/uikit.min.css"
//UIkit.use(icons)

const Lay = styled.div`
  position: relative;
  @media (max-width: 768px) {
  }
`

const Layout = ({ children, props }) => {
  useEffect(() => {
    UIkit.use(icons)
  })

  return (
    <Lay>
      <NavBar />
      <main style={{ paddingTop: "90px" }}>{children}</main>
      <Footer />
    </Lay>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
