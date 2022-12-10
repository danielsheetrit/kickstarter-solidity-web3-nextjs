import factory from '../../ethereum/factory';

export default async function factoryHandler(req, res) {
  let data;
  let status;

  if (req.method === 'GET') {
    try {
      const campaigns = await factory.methods.getDeployedCampaigns().call();
      data = campaigns;
    } catch (err) {
      console.log(err);
      status = 400;
      data = err;
    }
  } else if (req.method === 'POST') {
    // create code
  } 

  res.status(status).send(data);
}
