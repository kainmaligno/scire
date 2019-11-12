import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/components/header"
import Pointer from "../components/styledComponents/pointer"
import StudiesCard from "../components/styledComponents/StudiesCard"

const ArticleTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  p {
    text-transform: uppercase;
    color: #16a1b2;
    font-family: "Walkway SemiBold";
    font-size: 29px;
    line-height: 25px;
    text-align: center;
    @media (max-width: 500px) {
      font-size: 20px;
    }
  }
`
const GridContainer = styled.div`
  width: 96%;
  height: auto;
  padding: 2em;
  margin-top: -6em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    width: 100%;
    padding: 0;
  }
`
const CardContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
const ArticleContainer = styled.article`
  margin: 4em 4em 8em 4em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 500px) {
    margin: 0em 2.5em 5em 2.5em;
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
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              img
            }
          }
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
      <ArticleContainer>
        <ArticleTitle>
          <p>{articleTitle}</p>
          <div style={{ width: "100%" }} className="services-title"></div>
        </ArticleTitle>
      </ArticleContainer>
      <GridContainer>
        <CardContainer>
          {/* <StudiesCard/> */}
          {data.allMarkdownRemark.edges.length ? (
            data.allMarkdownRemark.edges.map((item, i) => (
              <StudiesCard
                title={item.node.frontmatter.title}
                image={item.node.frontmatter.img}
                slug={item.node.fields.slug}
                key={i}
              />
            ))
          ) : (
            <div>Loading...</div>
          )}
        </CardContainer>
      </GridContainer>
    </Layout>
  )
}

export default ServiciosEstudios
