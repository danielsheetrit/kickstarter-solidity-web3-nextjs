import { useState } from 'react';
import { Button, Form, Header, Input } from 'semantic-ui-react';

import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';

export default function CampaignDetailsContribute({ address }) {
  const [contribution, setContribution] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const amount = parseFloat(contribution, 10);

    if (amount <= 0 || isNaN(amount)) return;

    setLoading(true);

    const campaign = Campaign(address);

    try {
      const accounts = await web3.eth.getAccounts();

      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(contribution, 'ether'),
      });

      setSuccess(true);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: 48, matginLeft: 0, width: '100%' }}>
      <Header as="h3">Contribute to this campaign</Header>

      {!success && <Form onSubmit={handleSubmit}>
        <Input
          onChange={(ev) => setContribution(ev.target.value)}
          value={contribution}
          type="number"
          labelPosition="right"
          placeholder="contribution"
          label={{ basic: true, content: 'ether' }}
          style={{ width: 125, marginBottom: 0, marginRight: 65 }}
        />
        <Button
          loading={loading}
          style={{ height: 37 }}
          className="btn"
        >
          Contribute
        </Button>
      </Form>}

      {success && <p style={{ color: 'green' }}>Thank you for your contribution!</p>}
    </div>
  );
}
