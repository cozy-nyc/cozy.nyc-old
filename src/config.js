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

const config = {
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'http://0.0.0.0:8000',
  app: {
    title: 'cozy.nyc',
    description: 'A site for neets...',
    head: {
      titleTemplate: 'cozy.%s',
      meta: [
        { name: 'description', content: 'A site for neets...' },
        { charset: 'utf-8' },
        { property: 'og:site_name', content: 'cozy.nyc' },
        {
          property: 'og:image',
          content: 'https://raw.githubusercontent.com/cozy-nyc/cozy-nyc.github.io/master/favicon.ico'
        },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:title', content: 'cozy.nyc' },
        { property: 'og:description', content: 'A site for neets...' },
        { property: 'og:card', content: 'summary' },
        { property: 'og:site', content: '@cozy-nyc' },
        { property: 'og:creator', content: '@cozy-nyc' },
        { property: 'og:image:width', content: '200' },
        { property: 'og:image:height', content: '200' }
      ]
    }
  }
};

Object.assign(config, environment);

export default config;
