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
const amqplib  = require('amqplib');

//###################################
// LOCAL MODULES
//###################################

const { prisma } = require('../prisma/generated/prisma-client')
const Queue      = require('../service/queue');

//###################################
// CONST
//###################################

const API_URL      = nconf.get('api:url');
const BRANCH_QUEUE = nconf.get('queue:branch');


const BranchQueue  = new Queue(BRANCH_QUEUE).connect();

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

    JSON.stringify(request.payload);
    return 'ok'
  }
}

module.exports = [
  webhook
];