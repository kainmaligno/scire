/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            url
            author
          }
        }
      }
    `
  )

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${site.siteMetadata.title} | ${title}`}
    >
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Una empresa creada
    por seres humanos
    para el cuidado y la salud de
    otros seres humanos. 
    Somos una empresa mexicana de servicios de salud especializada en estudios de diagnóstico neurofisiológico y neurología."
      />

      {/**Google / Search Engine Tags */}
      <meta itemprop="name" content="Scire" />
      <meta
        itemprop="description"
        content="Una empresa creada
    por seres humanos
    para el cuidado y la salud de
    otros seres humanos. 
    Somos una empresa mexicana de servicios de salud especializada en estudios de diagnóstico neurofisiológico y neurología."
      />
      <meta
        itemprop="image"
        content="https://res.cloudinary.com/dtvigurwl/image/upload/v1574123000/Scire/ELECTROENCEFALOGRAMA_1.png"
      />

      {/**Facebook Meta Tags */}
      <meta property="og:url" content="https://www.scire.com.mx/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Scire" />
      <meta
        property="og:description"
        content="Una empresa creada
    por seres humanos
    para el cuidado y la salud de
    otros seres humanos. 
    Somos una empresa mexicana de servicios de salud especializada en estudios de diagnóstico neurofisiológico y neurología."
      />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/dtvigurwl/image/upload/v1574123000/Scire/ELECTROENCEFALOGRAMA_1.png"
      />

      {/**Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Scire" />
      <meta
        name="twitter:description"
        content="Una empresa creada
    por seres humanos
    para el cuidado y la salud de
    otros seres humanos. 
    Somos una empresa mexicana de servicios de salud especializada en estudios de diagnóstico neurofisiológico y neurología."
      />
      <meta
        name="twitter:image"
        content="https://res.cloudinary.com/dtvigurwl/image/upload/v1574123000/Scire/ELECTROENCEFALOGRAMA_1.png"
      />

      {/**Meta Tags Generated via http://heymeta.com */}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
}

export default SEO
