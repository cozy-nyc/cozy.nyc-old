module.exports = {
  apps : [{
    name      : 'cozy.nyc',
    script    : 'yarn',
    args      : 'start',
    interpreter: '/bin/bash',
    env: {
      NODE_ENV: 'production'
    }
  }]
};
