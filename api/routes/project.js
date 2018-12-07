'use strict';

//###################################
// NODE_MODULES
//###################################

const url      = require('url');
const Boom     = require('boom');
const _        = require('lodash');
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

const PROTOCOL = nconf.get('server:protocol') | 'http';
const HOST     = nconf.get('server:host');
const PORT     = nconf.get('server:port') | '';

const API_URL = url.format({
  protocol : PROTOCOL,
  hostname : HOST + PORT ,
  pathname : 'webhook'
});

//###################################
// API
//###################################

const LIST_URL   = '/project';

const create =  {
  method  : 'POST',
  path    : `${LIST_URL}`,
  options : {
    tags: ['api'],
    validate: {
      payload : {
        organization  : Joi.string().trim().required(),
        repository    : Joi.string().trim().required()
      }
    }
  },
  handler : async (request, h) => {

    const github = new Github({ token : request.auth.credentials.token.github });

    const { organization, repository } = request.payload;

    const _repository  = await github.getRepo(organization, repository)

    const hook         = await _repository.createHook({
      name    : 'web',
      active  : true,
      events  : ['create'],
      config: {
        url         : API_URL,
        content_type: "json"
      },
    });

    const { data }     = await _repository.getDetails();

    return await prisma.createProject({
      name       : data.name,
      repo_id    : data.id,
      repo_url   : data.url
    });

  }
}

const update =  {
  method  : 'PUT',
  path    : `${LIST_URL}/{id}`,
  options : {
    validate: {
      params  : {
        id: Joi.string().required()
      },
      payload : {
        healthcheck_url                : Joi.string().uri(),
        healthcheck_threshold_seconds  : Joi.number().min(0),
      }
    }
  },
  handler : async (request, h) => {

    const { healthcheck_url, healthcheck_threshold_seconds } = request.payload;

    const project = await prisma.project({ id:  request.params.id });

    if (!project)
      throw Boom.notFound('project');

    return await prisma.updateProject({
      where: { id:  request.params.id },
      data: {
        healthcheck_url,
        healthcheck_threshold_seconds
      }
    });
  }
}

module.exports = [
  create,
  update
];