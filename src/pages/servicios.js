import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ServicesCard from "../components/components/Services/Card"

const ServicesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 65px;
  height: 450px;
  @media (max-width: 800px) {
    margin: 12% 0 2% 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
  }
  @media (max-width: 450px) {
    margin: 15% 0 2% 0;
  }
`

const Services = () => {
  const data = useStaticQuery(graphql`
    query {
      consultas_img: file(relativePath: { eq: "img_servicios_consulta.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
      estudios_img: file(relativePath: { eq: "img_servicios_estudios.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
      servicesDataJson {
        services {
          btnInfo
          title1
          title2
          btnLinkConsulta
          btnLinkEstudios
        }
      }
    }
  `)
  const {
    title1,
    title2,
    btnInfo,
    btnLinkConsulta,
    btnLinkEstudios,
  } = data.servicesDataJson.services
  return (
    <Layout>
      <SEO title="Servicios" />
      <ServicesContainer>
        <ServicesCard
          image={data.consultas_img}
          title={title1}
          btnInfo={btnInfo}
          btnLink={btnLinkConsulta}
        />
        <ServicesCard
          image={data.estudios_img}
          title={title2}
          btnInfo={btnInfo}
          btnLink={btnLinkEstudios}
        />
      </ServicesContainer>
    </Layout>
  )
}

export default Services
