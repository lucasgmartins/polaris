'use strict';

//###################################
// NODE_MODULES
//###################################

const Boom     = require('boom');
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

      const github = new Github({ token : request.auth.credentials.token.github });
      const me     = github.getUser();
      // const { data }  = await me.listOrgs();
      const organization = await github.getOrganization('redspark-products');
      const repositories = await organization.getRepos();

      const repos = await Promise.all(repositories.data.map(repository => github.getRepo(repository.owner.login, repository.name)));
      const branches = await Promise.all(repos.map(repository => {
        return repository.listBranches().catch(e => e);
      }));

      return repositories.data;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = [
  featured
];