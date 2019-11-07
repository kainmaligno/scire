import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/components/header"
import Pointer from "../components/styledComponents/pointer"
// import Solocards from '../components/styledComponents/Solocards'
import StudiesCard from '../components/styledComponents/StudiesCard'
const ArticleTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  p {
    text-transform: uppercase;
    /* height: 50px;
    width: 620px;  pass it to mediaqueries*/
    color: #16a1b2;
    font-family: "Walkway SemiBold";
    font-size: 29px;
    line-height: 25px;
    text-align: center;

  }
`

const GridContainer = styled.div`
width:96%;
height:auto;
padding:2em;
margin-top:-6em;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

const CardContainer = styled.div`
width:90%;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
flex-wrap:wrap;
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
          <div style={{width:"100%"}} className="services-title"></div>
        </ArticleTitle>
      </article>
      <GridContainer>
        <CardContainer>
          <StudiesCard/>
          <StudiesCard/>
          <StudiesCard/>
          <StudiesCard/>
          <StudiesCard/>
          <StudiesCard/>
          <StudiesCard/>
          <StudiesCard/>
          <StudiesCard/>
        </CardContainer>
      </GridContainer>
    </Layout>
  )
}

export default ServiciosEstudios
