'use strict';

//###################################
// NODE_MODULES
//###################################

const Boom     = require('boom');
const octokit  = require('@octokit/rest')();
const _        = require('lodash');
const Joi      = require('joi');
const nconf    = require('nconf');
const jwt      = require('jsonwebtoken');
const Github = require('github-api');

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

const LIST_URL   = '/feature';

const featured =  {
  method  : 'GET',
  path    : LIST_URL,
  handler : async (request, h) => {

    try {

      const github = new Github({ token : request.auth.credentials.token });
      github.listBranches();
        // const me     = github.getUser();

      return 'Hello World';
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = [
  featured
];