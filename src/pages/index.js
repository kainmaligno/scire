import React from "react"
import { useStaticQuery, graphql} from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Header from '../components/components/header'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      header: file(relativePath: { eq: "neuro_man.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
      mainDataJson {
        main {
          body
          btnInfo
          title
        }
      }
    }
  `)
 const { title, body, btnInfo} = data.mainDataJson.main
  return (
    <Layout>
      <SEO title="Scire" />
      <Header image={data.header}  
        title={title} 
        body={body} 
        btnInfo={btnInfo} />
    </Layout>
  )
}

export default IndexPage
