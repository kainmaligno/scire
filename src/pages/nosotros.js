import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/components/header"
import DocCard from "../components/components/Doctor"
import Pointer from "../components/styledComponents/pointer"
import profile_img1 from "../images/yokary.png"
import salle from "../images/salle.png"
import neuro from "../images/Neuro.png"
import abc from "../images/abc.png"
import cleveland from "../images/cleveland.png"
import standford from "../images/standford.png"

const QuienesSomos = () => {
  const dataDocs = {
    name: "Dra. Yokary Mellado Ortiz",
    especialidad: "Neurofisiólogo, Neurólogo",
    cedula: "No. de cédula: 09177422 / 10417495",
    profile_img: `${profile_img1}`,
    info: [
      "Con carteles en publicaciones como la Revista de Neurofisiología en México y ponencias en foros como el Colegio de Medicina Interna de Puebla y la Sociedad Mexicana de Neurofisiologia Clínica, la Dra. Yokary Mellado se posiciona como referente de la medicina neurológica en México.",
      "Su paso por Instituciones como la Universidad La Salle, Universidad Nacional Autónoma de México y Cleveland Clinic Foundation en colaboración con la Universidad de Stanford, en Estados Unidos de América, respaldan a la Dra. Mellado como una neuróloga de excelencia.",
      "Realizó la especialidad de Neurología de Adultos en el Centro Médico Nacional 20 de Noviembre del ISSSTE así como, la subespecialidad en Neurofisiología Clínica en el Centro Médico ABC, título obtenido con Mención Honorífica.",
      "La Dra. Mellado ha encontrado en la epilepsia un interés particular, debido a esto y a la Neurofisiología realizó estudios de posgrado y estancia de 6 meses en el centro de Epilepsia de la Cleveland Clinic en Estados Unidos, esto la ha llevado a atender varios pacientes con este padecimiento tanto en hospitales privados como públicos.",
      "Su capacidad de líderazgo y emprendimiento la han llevado a fundar SCIRÉ Inteligencia Médica, empresa mexicana de servicios de salud, especializada en estudios de diagnóstigo neurofisiologico y neurología.",
    ],
    logos: [`${salle}`, `${neuro}`, `${abc}`, `${cleveland}`, `${standford}`],
  }
  //   },
  //   {
  //     name: "Dra. Areli Rosario Suárez Román",
  //     titile: "Neurofisiólogo, Especialista en rehabilitación y medicina física",
  //     cedula: "No. dde cédula: 6976825",
  //     src:
  //       "https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/articulos/perfil-resilencia.jpg",
  //     info: ["hola", "ddos"],
  //   },
  // ]
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
      aboutDataJson {
        nosotros {
          body
          btnInfo
          title
          pointer
        }
      }
    }
  `)
  const { title, body, btnInfo, pointer } = data.aboutDataJson.nosotros
  const { profile_img, name, especialidad, cedula, info, logos } = dataDocs

  return (
    <Layout>
      <SEO title="Acerca de nosotros" />
      <Header image={data.header} title={title} body={body} btnInfo={btnInfo} />
      <Pointer>{pointer}</Pointer>
      <p
        style={{
          fontSize: "28px",
          textAlign: "center",
          color: "#00999E",
        }}
      >
        NUESTROS MÉDICOS
      </p>
      <article>
        <div>
          <div>
            <div className="medicos-back1" />
            <div className="medicos-back2" />
          </div>
          <DocCard
            profile_img={profile_img}
            name={name}
            especialidad={especialidad}
            cedula={cedula}
            info={info}
            logos={logos}
          />
        </div>
      </article>
    </Layout>
  )
}

export default QuienesSomos
