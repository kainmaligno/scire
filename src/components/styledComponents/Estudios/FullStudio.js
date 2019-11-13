import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../../layout"
import Pointer from "../pointer"
import Button from "../Button"
import Slider from "../../components/Slider/slider"

const Header = styled.p`
  height: 41px;
  width: 30vw;
  color: #16a1b2;
  font-family: "Gotham Condensed";
  font-size: 40px;
  font-weight: 300;
  line-height: 41px;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 30px;
    width: 80vw;
  }
`
const PostContainer = styled.div`
  margin: 2em;
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  section {
    width: 65%;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;
    margin: 1em;
    section {
      width: 100%;
      ul {
        li {
          font-size: 18px;
        }
        span {
          font-size: 18px;
        }
      }
      div {
        margin-top: 40px;
        margin-left: 0.6em;
        width: 92%;
      }
    }
    aside {
      img {
        margin-top: 30px;
        height: 200px;
      }
    }
  }
`
const PostWrapper = styled.div`
  color: #6d6d6d;
  font-family: "Walkway SemiBold";
  font-size: 20px;
  line-height: 20px;
`

const ButtonContainer = styled.div`
  display: flex;
  padding: 2em;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;
  width: 50vw;
`
const DividerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Divider = styled.hr`
  box-sizing: border-box;
  height: 1px;
  width: 90%;
  border: 1px solid #643156;
`
const TextDivider = styled.div`
  height: 90px;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  p {
    height: 22px;
    width: 100vw;
    text-align: center;
    color: #6d6d6d;
    font-family: "Walkway SemiBold";
    font-size: 20px;
    line-height: 17px;
    @media (max-width: 768px) {
      font-size: 16px;
      margin-bottom: 60px;
    }
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        info
        blogImg
      }
      html
    }
  }
`
const FullStudio = props => {
  return (
    <Layout>
      <Pointer>{`servicios/estudios/${props.data.markdownRemark.fields.slug}`}</Pointer>
      <Container>
        <PostContainer>
          <aside style={{ marginRight: "2em" }}>
            <img
              src={props.data.markdownRemark.frontmatter.blogImg}
              alt={props.data.markdownRemark.frontmatter.title}
            />
          </aside>
          <section>
            <Header>{props.data.markdownRemark.frontmatter.title}</Header>
            <ul className="post-ul">
              <li>¿Qué es? </li>
              <span>{props.data.markdownRemark.frontmatter.info}</span>
              <li>¿Cómo me preparo para este estudio?</li>
            </ul>
            <div>
              <PostWrapper
                dangerouslySetInnerHTML={{
                  __html: props.data.markdownRemark.html,
                }}
              ></PostWrapper>
            </div>
          </section>
        </PostContainer>
        <ButtonContainer>
          <Link to="/agendar" style={{ textDecorationLine: "none" }}>
            <Button>
              <p>AGENDAR MI CITA</p>
            </Button>
          </Link>
        </ButtonContainer>
      </Container>

      <DividerContainer>
        <Divider />
        <TextDivider>
          <p>
            Consulta a tu Médico y recuerda que él es quien debe prescribir e
            interpretar los estudios. Los estudios realizados sirven como apoyo
            al diagnóstico.
          </p>
        </TextDivider>
      </DividerContainer>
      <Slider />
    </Layout>
  )
}

export default FullStudio
