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

const LIST_URL   = '/repository';
const ENTITY_URL = '/repository/:id'

const list =  {
  method  : 'GET',
  path    : `${LIST_URL}/github`,
  handler : async (request, h) => {

    try {

      const github = new Github({ token : request.auth.credentials.token.github });
      // const me     = github.getUser();
      // const { data }  = await me.listOrgs();
      const organization = await github.getOrganization('redspark-products');
      const { data }     = await organization.getRepos();

      return data;

      const promises     = data.map(repository => prisma.createRepository({
        github_id    : repository.id,
        github_name  : repository.name,
        github_url   : repository.url
      }));

      // const promises     = data.map(repository => {
      //   return {
      //     github_id    : repository.id,
      //     github_name  : repository.name,
      //     github_url   : repository.url
      //   };
      // });

      const repositories = await Promise.all(promises);

      // const repos = await Promise.all(repositories.data.map(repository => github.getRepo(repository.owner.login, repository.name)));

      return repositories;
    } catch (error) {
      console.log(error);
    }
  }
}

const create =  {
  method  : 'GET',
  path    : `${LIST_URL}/github/x`,
  handler : async (request, h) => {

    try {

      const github = new Github({ token : request.auth.credentials.token.github });

      const _repository = await github.getRepo('redspark-products', 'gestta-core')
      const details     = await _repository.getDetails();

      const repository = await prisma.createRepository({
        github_id    : details.id,
        github_name  : details.name,
        github_url   : details.url
      });

      return repository;

      const promises     = data.map(repository => prisma.createRepository();

      // const promises     = data.map(repository => {
      //   return {
      //     github_id    : repository.id,
      //     github_name  : repository.name,
      //     github_url   : repository.url
      //   };
      // });

      const repositories = await Promise.all(promises);

      // const repos = await Promise.all(repositories.data.map(repository => github.getRepo(repository.owner.login, repository.name)));

      return repositories;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = [
  list,
  create
];