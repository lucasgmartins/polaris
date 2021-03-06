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

const { prisma } = require('../../prisma/generated/prisma-client');

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
    tags: ['api'],
    auth        : {
      strategy : 'github',
      mode     : 'try'
    },
    handler: async function (request, h) {

      if (!request.auth.isAuthenticated) {
        return `Authentication failed due to: ${request.auth.error.message}`;
      }

      try {

        const user = await prisma.upsertUser(
          {
            where: {
              email: request.auth.credentials.profile.email
            },
            create: {
              name     : request.auth.credentials.profile.displayName,
              email    : request.auth.credentials.profile.email,
              username : request.auth.credentials.profile.username,
              email    : request.auth.credentials.profile.email,
              photo    : request.auth.credentials.profile.raw.avatar_url
            },
            update: {
              photo    : request.auth.credentials.profile.raw.avatar_url
            }
        });

        Object.assign(user, {
          token: {
            github : request.auth.credentials.token
          }
        })

        return { jwt : jwt.sign(user, JWT_SECRET) };

      } catch (error) {
        throw error;
      }
    }
  }
};



module.exports = [
  github
]