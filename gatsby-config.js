module.exports = {
  siteMetadata: {
    title: `Thomas Bailey`,
    name: `Thomas Bailey`,
    siteUrl: `https://thomasbailey.com`,
    description: `Love Svelte but get stuck sometimes? I'm here to help.`,
    hero: {
      heading: `Love Svelte but get stuck sometimes? I'm here to help.`,
      maxWidth: 652
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/noise_machines`
      },
      {
        name: `github`,
        url: `https://github.com/noise-machines`
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/company/datajoy/`
      }
    ]
  },
  plugins: [
    {
      resolve: '@narative/gatsby-theme-novela',
      options: {
        contentPosts: 'content/posts',
        contentAuthors: 'content/authors',
        basePath: '/',
        authorsPage: true,
        mailchimp: true,
        sources: {
          local: true
          // contentful: true,
        }
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://thomasbailey.us10.list-manage.com/subscribe/post?u=ba4db42a0195565ed932faaf5&amp;id=4d854d6f81' // add your MC list endpoint here; see plugin repo for instructions
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Thomas Bailey`,
        short_name: `Thomas Bailey`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    }
  ]
}
