module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Syloper',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/Layout/index'),
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-svgr',
    'gatsby-plugin-use-query-params',
  ],
};
