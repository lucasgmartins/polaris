'use strict';

const Hapi   = require('hapi');
const router = require('hapi-router');

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

const init = async () => {

    await loadRoutes(server);
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

async function loadRoutes(server) {

  return server.register({
    plugin : router,
    options  : {
      routes : 'routes/*.js'
    }
  });
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();