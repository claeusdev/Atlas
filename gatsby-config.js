module.exports = {
  siteMetadata: {
    title: 'Atlas',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'atlas-starter',
        short_name: 'atlas',
        start_url: '/',
        background_color: '#1e2a78',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
