import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Doctor from "../components/components/Doctor"

const data = [
  {
    name: "Dra. Yokary Mellado Ortiz",
    title: "Neurofisiólogo, Neurólogo",
    cedula: "No. de cédula: 09177422 / 10417495",
    src:
      "https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/articulos/perfil-resilencia.jpg",
    info: [
      "Con carteles en publicaciones como la Revista de Neurofisiología en México y ponencias en foros como el Colegio de Medicina Interna de Puebla y la Sociedad Mexicana de Neurofisiologia Clínica, la Dra. Yokary Mellado se posiciona como referente de la medicina neurológica en México.",
      "Su paso por Instituciones como la Universidad La Salle, Universidad Nacional Autónoma de México y Cleveland Clinic Foundation en colaboración con la Universidad de Stanford, en Estados Unidos de América, respaldan a la Dra. Mellado como una neuróloga de excelencia.",
      `Realizó la <strong>especialidad de Neurología de Adultos en el Centro Médico Nacional 20 de Noviembre del ISSSTE</strong>; así como, la subespecialidad en Neurofisiología Clínica en el Centro Médico ABC, título obtenido con Mención Honorífica.`,
      "La Dra. Mellado ha encontrado en la epilepsia un interés particular, debido a esto y a la Neurofisiología realizó estudios de posgrado y estancia de 6 meses en el centro de Epilepsia de la Cleveland Clinic en Estados Unidos, esto la ha llevado a atender varios pacientes con este padecimiento tanto en hospitales privados como públicos.",
      "Su capacidad de líderazgo y emprendimiento la han llevado a fundar SCIRÉ Inteligencia Médica, empresa mexicana de servicios de salud, especializada en estudios de diagnóstigo neurofisiologico y neurología.",
    ],
  },
  {
    name: "Dra. Areli Rosario Suárez Román",
    titile: "Neurofisiólogo, Especialista en rehabilitación y medicina física",
    cedula: "No. dde cédula: 6976825",
    src:
      "https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/articulos/perfil-resilencia.jpg",
    info: ["hola", "ddos"],
  },
]

const SecondPage = () => (
  <Layout>
    <SEO title="Acerca de Nosotros" />
    
  </Layout>
)

export default SecondPage
