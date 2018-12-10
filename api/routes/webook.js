'use strict';

//###################################
// NODE_MODULES
//###################################

const _        = require('lodash');
const Boom     = require('boom');
const Joi      = require('joi');
const nconf    = require('nconf');
const jwt      = require('jsonwebtoken');
const Github   = require('github-api');

//###################################
// LOCAL MODULES
//###################################

const { prisma } = require('../prisma/generated/prisma-client')

//###################################
// CONST
//###################################

const API_URL = nconf.get('api:url');

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
    // validate: {
    //   payload : {
    //     organization  : Joi.string().trim().required(),
    //     repository    : Joi.string().trim().required()
    //   }
    // }
  },
  handler : async (request, h) => {
    console.log(request);
    return 'ok'
  }
}

module.exports = [
  webhook
];