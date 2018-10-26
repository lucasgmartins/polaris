'use strict';

//###################################
// NODE_MODULES
//###################################

const Boom     = require('boom');
const Octokit  = require('@octokit/rest');
const _        = require('lodash');

const octokit = new Octokit()
octokit.authenticate({
  type: 'oauth',
  key: '56f9f325fa0caf7a9b60',
  secret: 'b3c976f99e974f97a766aebf2b46da6da2cc59cf',
})


const LIST_URL   = '/feature';

const featured =  {
  method  : 'GET',
  path    : LIST_URL,
  handler : async (request, h) => {

    try {

      return 'Hello World';
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = [
  featured
];