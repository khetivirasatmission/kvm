import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Kheti Virasat Mission`,
    description: `A NGO with mission to promote organic farming in Punjab.`,
    author: "@shirishgoyal",
    siteUrl: "https://khetivirasatmission.org/",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: [`Raleway\:400,900`, `Open Sans\:300,400,700,900`],
        },
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-postcss",
    "gatsby-plugin-emotion",
    "gatsby-plugin-styled-components",    
    {
      resolve: "gatsby-plugin-less",
      options: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            "primary-color": "#4472C4",
            "secondary-color": "#72A230",
            "link-color": "#4573C4",
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
    },
    {
      resolve: 'gatsby-plugin-import',
      options: {
        libraryName: "antd",
        style: true,   // or 'css'
      }
    },
    {
      resolve: "gatsby-plugin-antd",
      options: {
        style: true,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-WG9YESFXQ0",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Kheti Virasat Mission`,
        short_name: `kvm`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "gatsby-plugin-offline",
     // {
    //   resolve: `gatsby-plugin-facebook-customer-chat`,
    //   options: {
    //     sdk: {
    //       appId: "195658071778073",
    //       xfbml: true,
    //       version: "v10.0",
    //     },
    //     chat: {
    //       pageId: "137172129706131",
    //       loggedInGreeting: "Hi! How can I help you?",
    //       loggedOutGreeting: "Hi! How can I help you?",
    //     },
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-gtag`,
    //   options: {
    //     // your google analytics tracking id
    //     trackingId: `G-WG9YESFXQ0`,
    //     // Puts tracking script in the head instead of the body
    //     head: false,
    //     // enable ip anonymization
    //     anonymize: true,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-chatwoot`,
    //   options: {
    //     baseUrl: "https://app.chatwoot.com", // Required
    //     websiteToken: "rox7pQWbUYK21VFLHBQxaR6x", // Required
    //     includeInDevelopment: false, // Optional
    //     chatwootSettings: {}, // Optional
    //   },
    // },
  ],
};

export default config;

// <!-- Load Facebook SDK for JavaScript -->
//       <div id="fb-root"></div>
//       <script>
//         window.fbAsyncInit = function() {
//           FB.init({
//             xfbml            : true,
//             version          : 'v10.0'
//           });
//         };

//         (function(d, s, id) {
//         var js, fjs = d.getElementsByTagName(s)[0];
//         if (d.getElementById(id)) return;
//         js = d.createElement(s); js.id = id;
//         js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
//         fjs.parentNode.insertBefore(js, fjs);
//       }(document, 'script', 'facebook-jssdk'));</script>

//       <!-- Your Chat Plugin code -->
//       <div class="fb-customerchat"
//         attribution="install_email"
//         page_id="137172129706131"
//   theme_color="#67b868">
//       </div>