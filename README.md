# cozy.nyc

## A site for NEETs...

![Home](docs/design/desktop/Homepage-Desktop.png)

[![Build Status](https://travis-ci.org/cozy-nyc/cozy-nyc.svg?branch=master&style=flat-square)](https://travis-ci.org/cozy-nyc/cozy-nyc) [![Dependency Status](https://david-dm.org/cozy-nyc/cozy.nyc.svg?style=flat-square)](https://david-dm.org/cozy-nyc/cozy.nyc) [![devDependency Status](https://david-dm.org/cozy-nyc/cozy.nyc/dev-status.svg?style=flat-square)](https://david-dm.org/cozy-nyc/cozy.nyc?type=dev)

--------------------------------------------------------------------------------

This is only the frontend for [cozy.nyc](https://cozy.nyc )the backend can be found here [cozy-nyc-backend](https://github.com/cozy-nyc/cozy-nyc-backend)

## Installation

```bash
npm install
```


### Setup Env File

1. `touch .env` in terminal to create environment file with the following value filled

```
NODE_ENV='development'

HOST='0.0.0.0'
POST='3000'

API='http://0.0.0.0:8000'
APIHOST='0.0.0.0'
APIPORT='8000'

```

## Running Dev Server

```bash
npm run dev
```

The first time it may take a little while to generate the first `webpack-assets.json` and complain with a few dozen `[webpack-isomorphic-tools] (waiting for the first Webpack build to finish)` printouts, but be patient. Give it 30 seconds.


## Building and Running Production Server

```bash
npm run build
npm run start
```


### Unit Tests

The project uses [Jest](https://facebook.github.io/jest/) to run your unit tests.

To run the tests in the project, just simply run `npm test` if you have `Chrome` installed, it will be automatically launched as a test service for you.

## Join Our Discord

**Discord** - <https://discord.gg/3WSA2SG>

Special Thanks to [@bertho-zero](https://github.com/bertho-zero) for providing <https://github.com/bertho-zero/react-redux-universal-hot-example>
