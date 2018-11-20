'use strict';

//###################################
// NODE_MODULES
//###################################

const Boom     = require('boom');
const Octokit  = require('@octokit/rest');
const _        = require('lodash');

const github = {
  method: '*',
  path: '/auth/github',
  options: {
    auth: 'github',
    handler: function (request, h) {

      if (!request.auth.isAuthenticated) {
        return `Authentication failed due to: ${request.auth.error.message}`;
      }

      return '<pre>' + JSON.stringify(request.auth.credentials, null, 4) + '</pre>';
    }
  }
};

const success = {
  method: '*',
  path: '/auth/success',
  options: {
    auth: 'github',
    handler: function (request, h) {

      if (!request.auth.isAuthenticated) {
        return `Authentication failed due to: ${request.auth.error.message}`;
      }

      return '<pre>' + JSON.stringify(request.auth.credentials, null, 4) + '</pre>';
    }
  }
};

module.exports = [
  github,
  success
]