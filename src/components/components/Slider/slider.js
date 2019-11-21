import React from "react"
import styled from "styled-components"
import StudiesCard from "../../styledComponents/StudiesCard"
import { graphql, useStaticQuery } from "gatsby"

const SliderContainer = styled.div`
  height: auto;
  background-color: rgba(176, 176, 176, 0.1);
  padding: 10px;
`

const SliderTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  p {
    height: 25px;
    width: 292px;
    color: #16a1b2;
    font-family: "Walkway SemiBold";
    font-size: 24px;
    line-height: 25px;
    text-align: center;
    margin: 0;
  }
`

const Slider = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              img
            }
          }
        }
      }
    }
  `)
  return (
    <SliderContainer>
      <SliderTitle>
        <p>También te puede interesar:</p>
      </SliderTitle>
      <div
        className="uk-position-relative uk-visible-toggle uk-light"
        tabIndex="-1"
        uk-slider="true"
        style={{ padding: "1em" }}
      >
        <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-4@m uk-grid">
          {data.allMarkdownRemark.edges.length ? (
            data.allMarkdownRemark.edges.map((item, i) => (
              <li key={i}>
                <div className="uk-panel">
                  <StudiesCard
                    title={item.node.frontmatter.title}
                    image={item.node.frontmatter.img}
                    slug={item.node.fields.slug}
                    key={i}
                    className="uk-position-center uk-panel"
                  />
                </div>
              </li>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </ul>

        <a
          className="uk-position-center-left uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-previous="true"
          uk-slider-item="previous"
          style={{ color: "#643156" }}
        ></a>
        <a
          className="uk-position-center-right uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-next="true"
          uk-slider-item="next"
          style={{ color: "#643156" }}
        ></a>
      </div>
    </SliderContainer>
  )
}
export default Slider
