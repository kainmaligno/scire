module.exports = {
  siteMetadata: {
    title: `Scire empresa mexicana de servicios de salud`,
    url:`"https://peaceful-sinoussi-e5a1a5.netlify.com"`,
    description: `Una empresa creada
    por seres humanos
    para el cuidado y la salud de
    otros seres humanos. 
    Somos una empresa mexicana de servicios de salud especializada en estudios de diagnóstico neurofisiológico y neurología.`,
    author: `@spartans.dev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name:`siteInfo`,
        typeName:`Json`,
        path: `${__dirname}/src/siteInfo/`,
      },
    },
   
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
