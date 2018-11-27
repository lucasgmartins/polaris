'use strict';

//###################################
// NODE_MODULES
//###################################

const nconf  = require('nconf');
const url    = require('url');

//###################################
// CONST
//###################################

const GITHUB_PROVIDER      = 'github';
const GITHUB_PASSWORD      = 'cookie_encryption_password_secure';
const GITHUB_CLIENT_ID     = nconf.get('auth:github:client_id');
const GITHUB_CLIENT_SECRET = nconf.get('auth:github:client_secret');
const GITHUB_SCOPE         = [
  'repo',
  'user'
];

const APPLICATION_HOST     = nconf.get('server:location');

//###################################
// INIT
//###################################

module.exports = (server) => {

  server.auth.strategy('github', 'bell', {
    provider    : GITHUB_PROVIDER,
    password    : GITHUB_PASSWORD,
    clientId    : GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    location    : APPLICATION_HOST || server.info.uri,
    scope       : GITHUB_SCOPE,
    isSecure    : false
  });

  return Promise.resolve();
}