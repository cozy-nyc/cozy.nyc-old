const environment = {
  development: {
    isProduction: false,
    assetsPath: `http://${process.env.HOST || 'localhost'}:${+process.env.PORT + 1 || 3001}/dist/`
  },
  production: {
    isProduction: true,
    assetsPath: '/dist/'
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign(
  {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT,
    apiHost: process.env.APIHOST || 'localhost',
    apiPort: process.env.APIPORT,
    app: {
      title: 'React Redux Example',
      description: 'All the modern best practices in one example.',
      head: {
        titleTemplate: 'cozy.%s',
        meta: [
          { name: 'description', content: 'A site for neets...' },
          { charset: 'utf-8' },
          { property: 'og:site_name', content: 'cozy.nyc' },
          { property: 'og:image', content: 'assets/img/cube.svg' },
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:title', content: 'cozy.' },
          { property: 'og:description', content: 'A site for neets...' },
          { property: 'og:card', content: 'summary' },
          { property: 'og:site', content: '@cozy.nyc' },
          { property: 'og:creator', content: '@cozy.nyc' },
          { property: 'og:image:width', content: '200' },
          { property: 'og:image:height', content: '200' }
        ]
      }
    }
  },
  environment
);
