'use strict';

//###################################
// NODE_MODULES
//###################################

const Hapi   = require('hapi');
const router = require('hapi-router');
const nconf  = require('nconf');

//###################################
// LOCAL MODULES
//###################################

let properties = process.env.PROPERTIES || './config/env/dev.json';

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

const Authentication = require('./config/auth');

//###################################
// INIT
//###################################

const server = Hapi.server(SERVER_CONFIGURATION);

const init = async () => {

  try {

    await Authentication.load(server);
    await loadRoutes(server);

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);

  } catch (error) {
    console.error(`Error ${error.stack}`);
  }

};

async function loadRoutes(server) {

  return server.register({
    plugin : router,
    options  : {
      routes : 'routes/*.js'
    }
  });
}

process.on('unhandledRejection', err => {
  process.exit(1);
});

init();