const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";

console.log(`Using environment config: '${activeEnv}'`);

module.exports = {
  siteMetadata: {
    title: "Juan Vargas",
    description: "Portfolio",
    author: "@iclown"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png"
      }
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "wzzuzicvhn96",
        accessToken:
          "1cde8379ba90f71fff749027040c0a8ab2c1411f1b4fda752a0164c3a51f0d60",
        downloadLocal: true
      }
    },
    {
      resolve: "gatsby-plugin-resolve-src",
      options: {
        addSassLoader: true
      }
    }
  ]
};
