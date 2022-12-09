const assert = require('assert');
const ganache = require('ganache');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const { abi, evm } = require('../ethereum/build/Factory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts, factory, campaignAddress, campaign;

beforeEach(async () => {
  try {
    accounts = await web3.eth.getAccounts();

    const gasEstimate = await web3.eth.estimateGas({
      data: evm.bytecode.object,
    });

    factory = await new web3.eth.Contract(abi)
      .deploy({ data: evm.bytecode.object })
      .send({ from: accounts[2], gas: gasEstimate });

    await factory.methods.createCampaign('100').send({
      from: accounts[0],
      gas: '1000000',
    });

    // assigned the first element in the array to campaignAddress variable.
    [campaignAddress] = await factory.methods.getCampaigns().call();

    // here we just want to inform web3 about an existing contract
    // so deploy and send are unnecessary
    campaign = await new web3.eth.Contract(
      compiledCampaign.abi,
      campaignAddress
    );
  } catch (err) {
    console.log(err);
  }
});

describe('campaigns', () => {
  it('deploys a contract', () => {
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
  });

  it('marks caller as the campaign amanager', async () => {
    const manager = await campaign.methods.manager().call();
    assert.equal(accounts[0], manager);
  });

  it('allows to contribute, and assign them to approvers', async () => {
    await campaign.methods.contribute().send({
      value: '200',
      from: accounts[1],
    });

    const isContributor = await campaign.methods.approvers(accounts[1]);
    assert(isContributor);
  });

  it('requires a minimum contribution', async () => {
    let isError = false;

    try {
      await campaign.methods.contribute().send({
        value: '5',
        from: accounts[1],
      });

      isError = true;
    } catch (err) {
      assert(err);
    }

    assert.equal(isError, false);
  });

  it('allows a manager to make a payment request', async () => {
    const description = 'Buy batteries';

    await campaign.methods
      .createRequest(description, '100', accounts[1])
      .send({ gas: '1000000', from: accounts[0] });

    const request = await campaign.methods.requests(0).call();
    assert.equal(description, request.description);
  });

  it('processes request', async () => {
    await campaign.methods.contribute().send({
      from: accounts[0],
      value: web3.utils.toWei('10', 'ether'),
    });

    const amount = web3.utils.toWei('5', 'ether');
    await campaign.methods
      .createRequest('A', amount, accounts[1])
      .send({ gas: '1000000', from: accounts[0] });

    await campaign.methods.approveRequest(0).send({
      from: accounts[0],
      gas: '1000000',
    });

    await campaign.methods.finalizeRequest(0).send({
      from: accounts[0],
      gas: '1000000',
    });

    let balance = await web3.eth.getBalance(accounts[1]);
    balance = web3.utils.fromWei(balance, 'ether');
    balance = parseFloat(balance);

    assert(balance > 1004);
  });
});
