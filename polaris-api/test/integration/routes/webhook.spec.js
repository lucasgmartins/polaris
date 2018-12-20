'use strict'

//###################################
// NODE MODULES
//###################################

const lab          = require("lab").script();
const { expect }   = require("code");
const sinon        = require('sinon');
const amqplib      = require('amqplib');

exports.lab = lab;

//###################################
// LOCAL MODULES
//###################################

const server        = require("../../../index");
const newBranchStub = require('./stub/new-branch');

//###################################
// INIT
//###################################

lab.experiment('webhook', () => {

  // lab.beforeEach(async () => await mongoose.connection.dropDatabase());

  lab.test('should receive message and foward to consumer', async () => {

    const options = {
      method	: 'POST',
      url			: `/webhook`,
      payload : newBranchStub
    };

    const response   = await server.inject(options);

    sinon.assert.calledOnce(stub);

  })

});