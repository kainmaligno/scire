import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/components/header"
import Button from '../components/styledComponents/HeaderButton'
import docImage from '../images/img_forma_consulta.png'
const Pointer = styled.span`
  	height: 17px;	
    width: 940px;	
    color: #9B79C1;	
    font-family: "Walkway SemiBold";	
    font-size: 18px;	
    line-height: 17px;
    margin:7em;
`

const Services = () => {
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
        services {
          body
          btnInfo
          title
          pointer
        }
      }
    }
  `)
  const { title, body, btnInfo, pointer } = data.servicesDataJson.services

  return (
    <Layout>
      <SEO title="Servicios" />
      <Header image={data.header} title={title} body={body} btnInfo={btnInfo} />
       <Pointer>{pointer}</Pointer>
       <article className="article-container">
         <div>
         <div>
         <div className="services-back1"/>
         <div className="services-back2"/>
         </div>
        
         <div className="info-container">
          <p className="info">Vive la experiencia de una atención médica del más alto nivel de calidad con expertos en neurología avalados nacional e internacionalmente quienes te brindarán la atención que necesitas.</p>
        </div>
          <div>
            <Button>
              <span>AGENDAR MI CITA</span>
            </Button>
          </div>
         </div>

          <div className="services-image-container">
           <img src={docImage} alt="doctor consulta"/>
         </div>

       </article>
      
    </Layout>
  )
}

export default Services
