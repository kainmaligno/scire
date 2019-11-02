import React from "react"

// import Layout from "../components/layout"
// import Image from "../components/image"
import { useStaticQuery, graphql, Link} from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Header from '../components/components/header'
const IndexPage = () => {
  const data = useStaticQuery(graphql`
      query{
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
    <Layout>
      <SEO title="Scire" />
      <Header image={data.header} />
    </Layout>
  )
}

export default IndexPage
