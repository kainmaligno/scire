import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TyPage from "../components/components/TyPage"

const ThankYouPage = () => {
  const data = useStaticQuery(graphql`
    query {
      header: file(relativePath: { eq: "typage.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Gracias" />
      <TyPage image={data.header} />
    </Layout>
  )
}

export default ThankYouPage
