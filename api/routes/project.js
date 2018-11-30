'use strict';

//###################################
// NODE_MODULES
//###################################

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


//###################################
// API
//###################################

const LIST_URL   = '/project';

const create =  {
  method  : 'POST',
  path    : `${LIST_URL}`,
  options : {
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