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

const JWT_SECRET = nconf.get('secret');

//###################################
// API
//###################################

const github = {
  method:  ['GET', 'POST'],
  path: '/auth/github',
  options: {
    auth        : {
      strategy : 'github',
      mode     : 'try'
    },
    handler: async function (request, h) {

      if (!request.auth.isAuthenticated) {
        return `Authentication failed due to: ${request.auth.error.message}`;
      }

      try {

        const github = new Github({ token : request.auth.credentials.token });
        const me     = github.getUser();

        const newUser = await prisma.createUser({
          name: request.auth.credentials.profile.displayName,
          nickname: request.auth.credentials.profile.nickname,
          token: {
            github : request.auth.credentials.token
          }
        });

        return { jwt : jwt.sign(user, JWT_SECRET) };

      } catch (error) {
        console.log(error);
        throw error;
      }

      // return '<pre>' + JSON.stringify(request.auth.credentials, null, 4) + '</pre>';
    }
  }
};



module.exports = [
  github
]