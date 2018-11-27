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

        let user = await prisma.user({ email : request.auth.credentials.profile.email })

        if (!user) {
          user = await prisma.createUser({
            name     : request.auth.credentials.profile.displayName,
            username : request.auth.credentials.profile.username,
            email    : request.auth.credentials.profile.email,
            photo    : request.auth.credentials.profile.raw.avatar_url
          });
        }

        Object.assign(user, {
          token: {
            github : request.auth.credentials.token
          }
        })

        return { jwt : jwt.sign(user, JWT_SECRET) };

      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  }
};



module.exports = [
  github
]