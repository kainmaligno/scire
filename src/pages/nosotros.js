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
import unam from "../images/Unam.png"
import biomedicas from "../images/biomedicas.png"
import nutricion from "../images/INCMYN.png"

const QuienesSomos = () => {
  const dataDocs = [
    {
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
      doc_link:
        "https://www.doctoralia.com.mx/yokary-mellado-ortiz/neurofisiologo-neurologo/san-andres-cholula",
      logos: [`${salle}`, `${neuro}`, `${cleveland}`, `${abc}`, `${standford}`],
    },
    {
      name: "QFB. Marco Aguilar Medina",
      especialidad: "Químico Farmaceutico Biólogo",
      info: [
        "Marco Aguilar es Químico Farmacéutico Biólogo egresado de la Facultad de Química y estudiante de la Licenciatura en Administración en la Facultad de Contaduría y Administración, ambas de la Universidad Nacional Autónoma de México (UNAM).",
        "Marco Aguilar es Químico Farmacéutico Biólogo egresado de la Facultad de Química y estudiante de la Licenciatura en Administración en la Facultad de Contaduría y Administración, ambas de la Universidad Nacional Autónoma de México (UNAM).",
        "Con una trayectoria de más de 13 años de experiencia laboral el Lic. Aguilar ha ejercido funciones en áreas de Calidad (QA/QC, Sistemas de calidad, auditorías, etc.), Producción y Asuntos Regulatorios.",
        "Su paso por compañías como Boehringer Ingelheim, Bristol Myers Squibb, Novartis, Novo Nordisk, AstraZeneca y actualmente para Johnson & Johnson como Responsible Sanitario, lo han hecho un experto en calidad.",
        "Ha ejercido actividades de investigación en el Instituto Nacional de Ciencias Médicas y Nutrición “Salvador Zubirán”, y en el Instituto de Investigaciones Biomédicas de la UNAM, además de haber sido académico en esta Casa de Estudios. Es empresario y fundador de compañías dedicadas a la prestación de servicios de salud y consultor para emprendedores.",
        "Es miembro Senior, Auditor de Calidad Certificado (CQA) y Gerente de Calidad / Excelencia Organizacional (CMQ / OE) Certificado de la American Society for Quality (ASQ). Ha participado como juez para el International Team Excellence Award de ASQ y ha sido representante de la European Organization for Quality (EOQ) para México.",
        "En SCIRÉ Inteligencia Médica, es uno de los fundadores encargado de preservar la calidad y regulación de procesos.",
      ],
      logos: [`${nutricion}`, `${unam}`, `${biomedicas}`],
    },
  ]
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
          {dataDocs.map((data, i) => (
            <DocCard
              key={i}
              profile_img={data.profile_img}
              name={data.name}
              especialidad={data.especialidad}
              cedula={data.cedula}
              info={data.info}
              doc_link={data.doc_link}
              logos={data.logos}
            />
          ))}
        </div>
      </article>
    </Layout>
  )
}

export default QuienesSomos
