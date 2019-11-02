require("dotenv").config({
  path: `.env.development`,
})

module.exports = {
  siteMetadata: {
    title: `Code for Life Teaching Resources`,
    description: `Website for generating teaching worksheets`,
    author: `@code-for-life`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [`Baloo`],
        },
        typekit: {
          id: 'mrl4ieu'
        }
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `x5ignlfoflka`,
        accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
