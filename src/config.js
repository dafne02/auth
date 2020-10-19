/* eslint-disable no-unused-vars */
const path = require('path');
const merge = require('lodash/merge');

/* istanbul ignore next */
const requireProcessEnv = (name) => {
  if (!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable')
  }
  return process.env[name]
}

/* istanbul ignore next */
if (process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv-safe')
  // >>> Here is where the environment
  // variables are loaded.
  //
  // A) Uncomment this lines:
  dotenv.config({
    path: path.join(__dirname, '../.env'),
    example: path.join(__dirname, '../.env.example')
  })
}

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    root: path.join(__dirname, '..'),
    port: process.env.PORT || 3000,
    ip: process.env.IP || '0.0.0.0',
    apiRoot: process.env.API_ROOT || '',
    // >>> Here is where the environment
    // variables are set to config object.
    // This object is exported.
    //
    // A) Uncomment this line (SECRET TO GENERATE THE JWT TOKEN):
    jwtSecret: requireProcessEnv('JWT_SECRET'),
    // A) Uncomment this lines (MONGO OPTIONS):
    mongo: {
      options: {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    }
  },
  test: { },
  development: {
    mongo: {
      uri: process.env.MONGODB_URI,
      options: {
        debug: true
      }
    }
  },
  production: {
    ip: process.env.IP || undefined,
    port: process.env.PORT || 8080,
    mongo: {
      uri: process.env.MONGODB_URI
    }
  }
}

module.exports = merge(config.all, config[config.all.env])