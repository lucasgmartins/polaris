'use strict';

//###################################
// NODE_MODULES
//###################################

const nconf  = require('nconf');
const jwt    = require('hapi-auth-jwt2');

//###################################
// LOCAL MODULES
//###################################

const { prisma } = require('../../../prisma/generated/prisma-client');

//###################################
// CONST
//###################################

const JWT_SECRET = nconf.get('secret');

//###################################
// INIT
//###################################

module.exports = (server) => {

  server.register(jwt);

  server.auth.strategy('jwt', 'jwt',
  { key           : JWT_SECRET,          // Never Share your secret key
    validate      : validate,            // validate function defined above
    verifyOptions : { algorithms: [ 'HS256' ] }, // pick a strong algorithm
  });

  server.auth.default('jwt');

  return Promise.resolve();
}

const validate = async (decoded, request) => {

  const user = await prisma.user({ email : decoded.email });

  if (user)
    return { isValid: true };
  else
    return { isValid: false };
};