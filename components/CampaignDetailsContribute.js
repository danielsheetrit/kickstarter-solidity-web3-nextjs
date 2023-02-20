import { useState } from 'react';
import { Button, Form, Header, Input } from 'semantic-ui-react';

import { useRouter } from 'next/router';

import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';

import Message from './Message';

export default function CampaignDetailsContribute({ address }) {
  const [contribution, setContribution] = useState('');
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const [msgConfig, setMsgConfig] = useState({ txt: '', mode: '' });

  const router = useRouter();

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const amount = parseFloat(contribution, 10);
    if (amount <= 0 || isNaN(amount)) return;

    setLoading(true);

    try {
      const campaign = Campaign(address);
      const accounts = await web3.eth.getAccounts();

      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(contribution, 'ether'),
      });

      setMsgConfig({
        txt: 'Thank you for your contribution!',
        mode: 'success',
      });

      // replaceRoute only update the changes with the new data
      // but not really "refresh" the page
      router.replace(`/campaigns/${address}`);
    } catch (err) {
      setMsgConfig({
        txt: 'Somthing went wrong... try again later',
        mode: 'error',
      });
    } finally {
      setOpen(true);
      setLoading(false);
      setContribution('');
    }
  };

  return (
    <div style={{ marginTop: 48, matginLeft: 0, width: '100%' }}>
      <Header as="h3">Contribute to this campaign</Header>

      <Form onSubmit={handleSubmit}>
        <Input
          onChange={(ev) => setContribution(ev.target.value)}
          value={contribution}
          type="number"
          labelPosition="right"
          placeholder="contribution"
          label={{ basic: true, content: 'ether' }}
          style={{
            width: 125,
            marginBottom: 0,
            marginRight: 65,
          }}
        />
        <Button loading={loading} style={{ height: 37 }} className="btn">
          Contribute
        </Button>
      </Form>

      {open && (
        <Message
          setOpen={setOpen}
          bodyTxt={msgConfig.txt}
          mode={msgConfig.mode}
        />
      )}
    </div>
  );
}
