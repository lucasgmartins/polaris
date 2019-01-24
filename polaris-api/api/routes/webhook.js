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
// const amqplib  = require('amqplib');

//###################################
// LOCAL MODULES
//###################################

const { prisma } = require('../../prisma/generated/prisma-client')
// const Queue      = require('../service/queue');

//###################################
// CONST
//###################################

const API_URL      = nconf.get('api:url');
const BRANCH_QUEUE = nconf.get('queue:branch');


// const BranchQueue  = new Queue(BRANCH_QUEUE).connect();

//###################################
// API
//###################################

const LIST_URL   = '/webhook';

const webhook =  {
  method  : 'POST',
  path    : LIST_URL,
  options : {
    tags: ['api'],
    auth: false
  },
  handler : async (request, h) => {

    const feature = {
      name                : request.payload.ref.match(/heads\/(.*)/).pop(),
      repository_id       : request.payload.repository.id,
      repository_name     : request.payload.repository.name,
      responsible_login   : request.payload.sender.login,
      responsible_avatar  : request.payload.sender.avatar_url
    }

    const _feature = await prisma.createFeature(feature);

    console.log(JSON.stringify(request.payload));
    return _feature
  }
}

module.exports = [
  webhook
];