import React from "react"
import styled from "styled-components"
import Button from "../../styledComponents/Button"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Title = styled.span`
  font-size: 30px;
  color: white;
  margin-bottom: 2%;
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-left: -100px;
  margin-top: 300px;
  @media (max-width: 1200px) {
    margin-left: -40px;
  }
  @media (max-width: 1000px) {
    margin-left: 0;
  }
  @media (max-width: 800px) {
    margin-top: 50%;
    margin-left: -18%;
  }
  @media (max-width: 700px) {
    margin-top: 45%;
    margin-left: -15%;
  }
  @media (max-width: 550px) {
    margin-top: 40%;
    margin-left: -10%;
  }
  @media (max-width: 450px) {
    margin-top: 35%;
    margin-left: 0;
  }
  @media (max-width: 350px) {
    margin-top: 30%;
  }
`
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  display: flex;
  width: 40vw;
  @media (max-width: 800px) {
    width: 90vw;
  }
`

const Card = ({ image, title, btnInfo, btnLink }) => (
  <CardContainer>
    <Img
      title="consultas_img"
      fluid={image.childImageSharp.fluid}
      style={{ width: "90%" }}
    />
    <TextContainer>
      <Title>{title}</Title>
      <Link to={btnLink} style={{ textDecorationLine: "none" }}>
        <Button>
          <p>{btnInfo}</p>
        </Button>
      </Link>
    </TextContainer>
  </CardContainer>
)

export default Card
