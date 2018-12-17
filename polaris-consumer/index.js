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

const RABBITMQ_URL         = nconf.get('rabbitmq:url');
const WEBHOOK_BRANCH_QUEUE = 'webhook_branch';
const WEBHOOK_PUSH_QUEUE   = 'webhook_branch';

//###################################
// INIT
//###################################

const init = async () => {
  const connection = await amqplib.connect(RABBITMQ_URL);
  const channel    = await connection.createChannel();

  const promises = [
    channel.assertQueue(WEBHOOK_BRANCH_QUEUE),
    // channel.assertQueue(WEBHOOK_PUSH_QUEUE)
  ];

  await Promise.all(promises);

  channel.consume(WEBHOOK_BRANCH_QUEUE, function(msg) {
    if (msg !== null) {
      console.log(msg.content.toString());
      ch.ack(msg);
    }
  });
};

try {

  init();

} catch (error) {
  console.log(error);
}