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

      const github       = new Github({ token : request.auth.credentials.token.github });

      const organization = await github.getOrganization('redspark-products');
      const { data }     = await organization.getRepos();

      return data;

    } catch (error) {
      console.log(error);
    }
  }
}


module.exports = [
  list
];