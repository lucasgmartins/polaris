'use strict';

const Boom     = require('boom');
const Octokit  = require('@octokit/rest');
const _        = require('lodash');

const octokit = new Octokit()
octokit.authenticate({
  type: 'oauth',
  key: 'x',
  secret: 'y'
})


const LIST_URL   = '/feature';

const featured =  {
  method  : 'GET',
  path    : LIST_URL,
  handler : async (request, h) => {
    const result = await octokit.orgs.getAll();
    return result;
  }
}

module.exports = [
  featured
];