'use strict';

//###################################
// NODE_MODULES
//###################################

const Boom     = require('boom');
const Octokit  = require('@octokit/rest');
const _        = require('lodash');
const Joi      = require('joi');

const github = {
  method:  ['GET', 'POST'],
  path: '/auth/github',
  options: {
    auth        : {
      strategy : 'github',
      mode     : 'try'
    },
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
    handler: function (request, h) {

      return 'Hello, ' + request.auth.credentials + '!';
    }
  }
};

module.exports = [
  github,
  success
]