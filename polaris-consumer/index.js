'use strict'

//###################################
// NODE_MODULES
//###################################

const amqplib = require('amqplib');
const nconf   = require('nconf');

const properties = process.env.PROPERTIES || './config/env/dev.json';

nconf
  .argv()
  .env({separator:'__'})
  .file(properties);

//###################################
// LOCAL MODULES
//###################################

//###################################
// CONST
//###################################

const RABBITMQ_URL = nconf.get('rabbitmq:url');
const WEBHOOK_BRANCH_QUEUE = 'webhook_brach';
const WEBHOOK_PUSH_QUEUE   = 'webhook_brach';

//###################################
// INIT
//###################################

const init = async () => {
  const connection = await amqplib.connect(RABBITMQ_URL);
  const channel    = await connection.createChannel();

  await Promise.all([
    channel.assertQueue(WEBHOOK_BRANCH_QUEUE),
    channel.assertQueue(WEBHOOK_PUSH_QUEUE)
  ]
};

try {

  init();
  
} catch (error) {
  
}