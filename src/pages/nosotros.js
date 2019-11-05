import React from "react"
import { Link, useStaticQuery,graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/components/header"

const AboutPage = () => {

  const data = useStaticQuery(graphql`
    query {
      header: file(relativePath: { eq: "head_consulta.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
      aboutDataJson {
        nosotros {
          body
          btnInfo
          title
        }
      }
    }
  `)
    const { title, body, btnInfo} = data.aboutDataJson.nosotros
    return (
      <Layout>
      <SEO title="Sobre nosotros" />
      <Header image={data.header} 
        title={title} 
        body={body} 
        btnInfo={btnInfo}/>
        <span>Acerca de Nosotros</span>

    </Layout>
    )
  
}

export default AboutPage
