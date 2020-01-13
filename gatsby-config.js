module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Kheti Virasat Mission`,
    description: `A NGO with mission to promote organic farming in Punjab.`,
    author: "@shirishgoyal",
    siteUrl: "https://khetivirasatmission.org/",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Raleway\:400,900`, `Open Sans\:300,400,700,900`],
      },
    },
    {
      resolve: "gatsby-plugin-less",
      options: {
        javascriptEnabled: true,
        modifyVars: {
          "primary-color": "#72A230",
          "secondary-color": "#72A230",
          "link-color": "#72A230",
          "font-size-base": "16px",
          "text-color": "#333333",
          "text-color-secondary": "#333333",
          "heading-color": "#333333",
          "font-family": "Open Sans",
          "layout-header-background": "#f5f5f5",
          "layout-body-background": "#ffffff",
          "border-radius-base": "18px",
        },
      },
    },
    {
      resolve: "gatsby-plugin-antd",
      options: {
        style: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-styled-components",
    "gatsby-plugin-typescript",
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-json",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kheti Virasat Mission`,
        short_name: `kvm`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.jpeg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
        {
          resolve: "gatsby-remark-embed-youtube",
          options: {
            width: 800,
            height:400,
            noIframeBorder: true,
          }
        },
        "gatsby-remark-responsive-iframe"
        ]
      }
    },
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
