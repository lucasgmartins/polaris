'use strict';

//###################################
// NODE_MODULES
//###################################

const _        = require('lodash');
const Boom     = require('boom');
const Joi      = require('joi');
const nconf    = require('nconf');

//###################################
// LOCAL MODULES
//###################################

const { prisma } = require('../prisma/generated/prisma-client')

//###################################
// CONST
//###################################

const API_URL      = nconf.get('api:url');


//###################################
// API
//###################################

const LIST_URL   = '/webhook';

const webhook =  {
  method  : 'POST',
  path    : `${LIST_URL}`,
  options : {
    tags: ['api'],
    auth: false
  },
  handler : async (request, h) => {

    console.log(JSON.stringify(request.payload));
    return 'ok'
  }
}

module.exports = [
  webhook
];