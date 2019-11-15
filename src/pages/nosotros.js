import React from "react"
import { Link, useStaticQuery,graphql } from "gatsby"
import styled from 'styled-components';

import Layout        from "../components/layout"
import SEO           from "../components/seo"
import Header        from "../components/components/header"
import Title         from "../components/components/Title"
import Subtitle      from "../components/components/Subtitle"
import CircleImage   from '../components/components/CircleImage';
import SideBarDoctor from '../components/components/SideBarDoctor';

/* IMAGES */
import ABC        from "../images/abc.png";
import Biomedicas from "../images/biomedicas.png"
import Cleveland  from "../images/cleveland.png";
import CM         from "../images/CM.png";
import INCMYN     from "../images/INCMYN.png";
import Neuro      from "../images/Neuro.png";
import Salle      from "../images/salle.png";
import Standford  from "../images/standford.png";
import Unam       from "../images/Unam.png";
import Yokary     from "../images/yokary.png";
import Typage     from "../images/typage.png";

const Space = styled.div`
  margin: 25px 0px;
`

const Data = styled.div`
  width: 80%;
`

const P = styled.p`
  color    : #6D6D6D;
  font-size: 16px;
`

const Span = styled.span`
  color: #16A1B2;
`
const TwoColumns = styled.div`
  align-items    : flex-start;
  display        : flex;
  justify-content: space-between;
`
const Name = styled.span`
  margin: 5px 0px;
`
const Info = styled.p`
  color : #9B79C1;
  margin: 0px;
`

const DoctorInfo = styled.div`
  margin-bottom: 25px;
`

const AboutPage = () => {
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
        }
      }
    }
  `)
    // const { title, body, btnInfo} = data.aboutDataJson.nosotros
    // let { name, srcLink, cedula, info, titleDoctor, logos } = dataOne;
    return (
        <Layout>
        <SEO title="Sobre nosotros" />
        {/* <Header image   = {data.header} 
                title   = {title} 
                body    = {body} 
                btnInfo = {btnInfo}
        /> */}
        <Header 
          image    = { Typage }
          title    = { "UN SERVICIO DE CALIDAD ES POSIBLE, CUANDO ELIGES AL MEJOR EQUIPO." }
          subtitle = { "Tenemos un equipo de médicos especialistas certificados, expertos en el tratamiento de padecimientos neurológicos. Avalados por instituciones nacionales e internacionales."}
          btnInfo  = { "Quiero mi cita" } 
        />
        <Subtitle text = { "Acerca de Nosotros" } />
        <Title text = { "NUESTROS MÉDICOS" }/>
        <Space>
          <CircleImage
            src   = { Yokary }
            width = { "150px" }
          /> 
          <DoctorInfo>
            <Name>Dra. Areli Rosario Suárez Román</Name>
            <Info>Neurofisiólogo, Especialista en rehabilitación y medicina física</Info>
            <Info>No. de cédula: 6976825</Info>
          </DoctorInfo>
          <TwoColumns>
            <Data>
              <P>Con carteles en publicaciones como la Revista de Neurofisiología en México y ponencias en foros como el Colegio de Medicina Interna de Puebla y la Sociedad Mexicana de Neurofisiologia Clínica, la Dra. Yokary Mellado se posiciona como referente de la medicina neurológica en México.</P>
              <P>Su paso por Instituciones como la Universidad La Salle, Universidad Nacional Autónoma de México y Cleveland Clinic Foundation en colaboración con la Universidad de Stanford, en Estados Unidos de América, respaldan a la Dra. Mellado como una neuróloga de excelencia.</P>
              <P>Realizó la <Span>especialidad de Neurología de Adultos en el Centro Médico Nacional 20 de Noviembre del ISSSTE</Span>; así como, la subespecialidad en <Span>>Neurofisiología Clínica en el Centro Médico ABC</Span>, título obtenido con <Span>Mención Honorífica</Span>.</P>
              <P>La Dra. Mellado ha encontrado en la epilepsia un interés particular, debido a esto y a la Neurofisiología <Span>realizó estudios de posgrado y estancia de 6 meses en el centro de Epilepsia de la Cleveland Clinic en Estados Unidos</Span>, esto la ha llevado a atender varios pacientes con este padecimiento tanto en hospitales privados como públicos.</P>
              <P>Su capacidad de líderazgo y emprendimiento la han llevado a fundar SCIRÉ Inteligencia Médica, empresa mexicana de servicios de salud, especializada en estudios de diagnóstigo neurofisiologico y neurología.</P>
            </Data>
            <SideBarDoctor 
              button = { true } 
              logos  = { [Salle, Neuro, ABC, Cleveland, Standford] }
            />
          </TwoColumns>
        </Space>
        <Space>
          <CircleImage
            src   = { Yokary }
            width = { "150px" }
          />
           <DoctorInfo>
            <Name>Dra. Areli Rosario Suárez Román</Name>
            <Info>Neurofisiólogo, Especialista en rehabilitación y medicina física</Info>
            <Info>No. de cédula: 6976825</Info>
           </DoctorInfo>
          <TwoColumns>
            <Data>
              <P><Span>Certificada por el consejo Mexicano de Rehabilitación y por el consejo Mexicano de Neurofisiología</Span>, la Dra. Areli Suárez Román es un referente de la medicina Neurológica en México.</P>
              <P>Gracias a su pasión por la investigación ha sido <Span>galardonada con el premio Mario Shkurovich 2016, otorgado por la Sociedad Mexicana de Neurofisiologia Clínica a la mejor investigación</Span> de su congreso bi anual.</P>
              <P>Su trayectoria se distingue por su conocimiento y calidad humana, caracteristicas que hacen evidente su <Span>maestría en Electrodiagnóstico Neurológico y otras prácticas de estudio del sueño</Span>.</P>
              <P>El interés por el área de la Neurofisiología ha llevado a la Dra. Suárez a exponer sus investigaciones en importantes foros como, el Simposio Latinoamericano de Monitorización Neurofisiológica, Congreso Internacional de la Sociedad Mexicana de Neurofisiología Clínica o en publicaciones como Clinical Neurophysiology Journal.</P>
              <P>Su constante preparación en instituciones como la Universidad Nacional Autónoma de México (UNAM), la Universidad de Barcelona y su paso por la Universidad de Stanford han forjado las aptitudes de líderzago en la Dra. Suárez, es por eso que es una de las fundadoras de SCIRÉ Inteligencia Médica.</P>
            </Data>
            <SideBarDoctor 
              button = { true } 
              logos = { [CM, Neuro, Standford] }
            />
          </TwoColumns>
        </Space>
        <Space>
          <CircleImage
            src   = { Yokary   }
            width = { "150px" }
          />
          <DoctorInfo>
            <Name>QFB. MARCO AGUILAR MEDINA</Name>
            <Info>Químico Farmaceutico Biólogo</Info>
          </DoctorInfo>
          <TwoColumns>
            <Data>
              <P>Marco Aguilar es Químico Farmacéutico Biólogo egresado de la Facultad de Química y estudiante de la Licenciatura en Administración en la Facultad de Contaduría y Administración, ambas de la Universidad Nacional Autónoma de México (UNAM).</P>
              <P>Con una trayectoria de <Span>más de 13 años de experiencia laboral</Span> el Lic. Aguilar ha ejercido funciones en áreas de Calidad (QA/QC, Sistemas de calidad, auditorías, etc.), Producción y Asuntos Regulatorios.</P>
              <P>Su paso por compañías como Boehringer Ingelheim, Bristol Myers Squibb, Novartis, Novo Nordisk, AstraZeneca y actualmente para Johnson & Johnson como Responsible Sanitario, lo han hecho un <Span>experto en calidad</Span>.</P>
              <P><Span>Ha ejercido actividades de investigación en el Instituto Nacional de Ciencias Médicas y Nutrición “Salvador Zubirán”, y en el Instituto de Investigaciones Biomédicas de la UNAM</Span>, además de haber sido académico en esta Casa de Estudios.</P>
              <P>Es empresario y fundador de compañías dedicadas a la prestación de servicios de salud y consultor para emprendedores.</P>
              <P>Es miembro Senior, Auditor de Calidad Certificado (CQA) y Gerente de Calidad / Excelencia Organizacional (CMQ / OE) Certificado de la American Society for Quality (ASQ). Ha participado como juez para el International Team Excellence Award de ASQ y ha sido representante de la European Organization for Quality (EOQ) para México.</P>
              <P>En SCIRÉ Inteligencia Médica, es uno de los fundadores encargado de preservar la calidad y regulación de procesos.</P>
            </Data>
            <SideBarDoctor 
              logos = { [Unam,Biomedicas, INCMYN] }
            />
          </TwoColumns>
        </Space>
    </Layout>
    )
  
}

export default AboutPage
