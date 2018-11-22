'use strict';

//###################################
// NODE_MODULES
//###################################

const Boom     = require('boom');
const octokit  = require('@octokit/rest')();
const _        = require('lodash');
const Joi      = require('joi');

const Github = require('github-api');

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
        const { data }  = await me.listOrgs();

        return data;

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