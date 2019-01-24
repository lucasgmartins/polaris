'use strict'

//###################################
// NODE MODULES
//###################################

const server        = require("../../../index");

const lab          = require("lab").script();
const { expect }   = require("code");
const sinon        = require('sinon');

exports.lab = lab;

//###################################
// LOCAL MODULES
//###################################

const { prisma }    = require('../../../prisma/generated/prisma-client');

const newBranchStub = require('./stub/new-branch');

//###################################
// INIT
//###################################

lab.experiment('webhook', () => {

  // lab.beforeEach(async () => await server);

  lab.test('should receive message and save as feature', async () => {

    const options = {
      method	: 'POST',
      url			: '/webhook',
      payload : newBranchStub
    };

    const s        = await server;
    const response = await s.inject(options);

    // const newFeature = await prisma.feature();

    console.log(response.result);

    expect(response.statusCode).to.equal(200)

    expect(response.result.id).to.exist();
    expect(response.result.name).to.be.equal("test-branch");



    // sinon.assert.calledOnce(stub);

  })

});