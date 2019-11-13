import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/components/header"
import Button from "../components/styledComponents/HeaderButton"
import docImage from "../images/img_forma_consulta.png"
import Pointer from "../components/styledComponents/pointer"

const ServiciosConsulta = () => {
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
        services_consulta {
          body
          btnInfo
          title
          pointer
        }
      }
    }
  `)
  const {
    title,
    body,
    btnInfo,
    pointer,
  } = data.servicesDataJson.services_consulta

  return (
    <Layout>
      <SEO title="Consulta" />
      <Header image={data.header} title={title} body={body} btnInfo={btnInfo} />
      <Pointer>{pointer}</Pointer>
      <article className="article-container">
        <div className="container">
          <div>
            <div className="services-back1" />
            <div className="services-back2" />
          </div>

          <div className="text-container">
            <div className="info-container">
              <p className="info">
                Vive la experiencia de una atención médica del más alto nivel de
                calidad con expertos en neurología avalados nacional e
                internacionalmente quienes te brindarán la atención que
                necesitas.
              </p>
            </div>
            <div>
              <Link to="/agendar" style={{ textDecorationLine: "none" }}>
                <Button>
                  <span>AGENDAR MI CITA</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="services-image-container">
          <img src={docImage} alt="doctor consulta" />
        </div>
      </article>
    </Layout>
  )
}

export default ServiciosConsulta
