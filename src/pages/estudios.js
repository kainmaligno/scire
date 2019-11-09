import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import EstudiosTemplate from '../components/styledComponents/Estudios/FullStudio'


const Estudios = () => {
    const data = useStaticQuery(graphql`
    query{
        allMarkdownRemark {
            edges {
              node {
                  fields{
                      slug
                  }
                frontmatter {
                  title
                }  
              }
            }
          }
    }
    `)
    return (
        <Layout>
            <SEO title="Estudios"/>
            <div>
             <EstudiosTemplate/>
            {data.allMarkdownRemark.edges.map((item,i) => { 
                 return <li key={i}>{item.node.frontmatter.title}</li>}
                 )}
        </div>
        </Layout>
      
    )
}

export default Estudios