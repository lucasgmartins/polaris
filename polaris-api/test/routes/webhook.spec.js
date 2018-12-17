'use strict'

//###################################
// NODE_MODULES
//###################################

const lab          = require("lab").script();
const { expect }   = require("code");
const mongoose     = require('mongoose');
const sinon        = require('sinon');
const amqplib      = require('amqplib');

//###################################
// NODE_MODULES
//###################################

const server = require("../../index");

//###################################
// INIT
//###################################

lab.experiment('webhook', () => {

  // lab.beforeEach(async () => await mongoose.connection.dropDatabase());

  lab.test('should receive message and foward to consumer', async () => {

    const options = {
      method	: 'POST',
      url			: `/webhook`,
      payload : {
        email : 'audister.studios@gmail.com'
      }
    };

    const stub = sinon.stub(amqplib, 'sendToQueue').resolves();

    const response   = await server.inject(options);

    sinon.assert.calledOnce(stub);

  })

});