/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./components/header"
import Footer from "./components/Footer"
import "./layout.css"
import styled from 'styled-components'


const Lay = styled.div`
  position: relative;

`;

const Layout = ({ children, props }) => {
  
  const data = useStaticQuery(graphql`
    query {
       title:site {
        siteMetadata {
          title
        }
      }
      header:file(relativePath:{ eq: "neuro_man.png"}){
                childImageSharp{
                  fluid(maxWidth:1200){
                    originalName
                    ...GatsbyImageSharpFluid
                  }
                }
              }
    }
  
  `)

  return (
    <Lay>
      <Header siteTitle={data.title.siteMetadata.title} image={data.header} />
            <main>{children}</main>
        <Footer/>
    </Lay>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
