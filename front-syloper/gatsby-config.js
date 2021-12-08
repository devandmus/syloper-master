module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Syloper",
  },
  plugins: [
    `gatsby-plugin-sass`, 
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `work sans\:400,500,600,700`,
        ],
        display: 'swap',
      },
    },
  ],
};
