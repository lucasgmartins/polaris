'use strict';

//###################################
// NODE_MODULES
//###################################

const Hapi        = require('hapi');
const router      = require('hapi-router');
const HapiSwagger = require('hapi-swagger');
const nconf       = require('nconf');
const Inert       = require('inert');
const Vision      = require('vision');

//###################################
// LOCAL MODULES
//###################################

const Pack = require('./package');

const properties = process.env.PROPERTIES || './api/config/env/test.json';

nconf
  .argv()
  .env({separator:'__'})
  .file(properties);

//###################################
// CONST
//###################################

const SERVER_CONFIGURATION = nconf.get('server');

//###################################
// LOCAL MODULES
//###################################

const Authentication = require('./api/config/auth');

//###################################
// INIT
//###################################

const server = Hapi.server(SERVER_CONFIGURATION);

const init = async () => {

  try {

    server.log(['error', 'database', 'read']);

    await loadAuth(server);
    await loadSwagger(server);
    await loadRoutes(server);

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);

  } catch (error) {

    server.log('error', error.stack);
  }

};

async function loadAuth(server) {
  return Authentication.load(server);
}

async function loadSwagger(server) {

  const swaggerOptions = {
    info: {
        title: 'Polaris API Documentation',
        version: Pack.version,
    },
  };

  return server.register([
      Inert,
      Vision,
      {
        plugin: HapiSwagger,
        options: swaggerOptions
      }
  ]);
}

async function loadRoutes(server) {

  return server.register({
    plugin : router,
    options  : {
      routes : 'api/routes/*.js'
    }
  });
}

process.on('unhandledRejection', err => {
  process.exit(1);
});

init();

module.exports = server;