import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ServicesCard from "../components/components/Services/Card"

const ServicesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 4% 2% 2% 2%;
  width: 95vw;
  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
          fluid(maxWidth: 1200) {
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
