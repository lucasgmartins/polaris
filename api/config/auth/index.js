'use strict';

//###################################
// NPM MODULES
//###################################

const Bell  = require('bell');

//###################################
// LOCAL MODULES
//###################################

const github = require('./github');

//###################################
// INIT
//###################################

module.exports.load = async (server) => {

  await server.register(Bell);

  const authentications = [
    github(server)
  ];

  return Promise.all(authentications);
}