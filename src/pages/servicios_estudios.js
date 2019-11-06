import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/components/header"
import Pointer from "../components/styledComponents/pointer"

const ArticleTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  p {
    text-transform: uppercase;
    height: 50px;
    width: 620px;
    color: #16a1b2;
    font-family: "Walkway SemiBold";
    font-size: 24px;
    line-height: 25px;
    text-align: center;
  }
`
const ServiciosEstudios = () => {
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
      servicesDataJson {
        services_estudios {
          body
          btnInfo
          title
          pointer
          articleTitle
        }
      }
    }
  `)
  const {
    title,
    body,
    btnInfo,
    pointer,
    articleTitle,
  } = data.servicesDataJson.services_estudios

  return (
    <Layout>
      <SEO title="Servicios | Estudios" />
      <Header image={data.header} title={title} body={body} btnInfo={btnInfo} />
      <Pointer>{pointer}</Pointer>
      <article className="article-container">
        <ArticleTitle>
          <p>{articleTitle}</p>
        </ArticleTitle>
      </article>
    </Layout>
  )
}

export default ServiciosEstudios
