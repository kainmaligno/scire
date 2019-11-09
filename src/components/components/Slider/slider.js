import React from "react"
import styled from "styled-components"
import StudiesCard from "../../styledComponents/StudiesCard"
import { graphql, useStaticQuery } from "gatsby"

const SliderContainer = styled.div`
    height: 300px;	
    background-color: rgba(176,176,176,0.1);

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
  console.log(data)
  return (
    <SliderContainer>
      <div
        className="uk-position-relative uk-visible-toggle uk-light uk-child-width-1-4@m uk-grid='true'
        tabIndex='-1' "
        uk-slideshow="animation:fade"
      >
        <ul className="uk-slideshow-items">
          {data.allMarkdownRemark.edges.length ? (
            data.allMarkdownRemark.edges.map((item, i) => (
              <li key={i}>
                {" "}
                <StudiesCard
                  title={item.node.frontmatter.title}
                  image={item.node.frontmatter.img}
                  slug={item.node.fields.slug}
                  key={i}
                  
                />
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
          uk-slideshow-item="previous"
          style={{color:'black'}}
        ></a>
        <a
          className="uk-position-center-right uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-next="true"
          uk-slideshow-item="next"
          style={{color:'black'}}
        ></a>
      </div>
    </SliderContainer>
  )
}
export default Slider
