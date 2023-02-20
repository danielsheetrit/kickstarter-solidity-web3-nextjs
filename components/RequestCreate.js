import { useState } from 'react';
import { useRouter } from 'next/router';

import { Button, Input, Grid } from 'semantic-ui-react';

import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';

import PageHeader from './PageHeader';
import CampaignDetailsAddresses from './CampaignDetailsAddresses';
import Message from './Message';

const { Row } = Grid;

const requestInitState = {
  description: '',
  amount: '',
  recipient: '',
};

export default function RequestCreate({ address }) {
  const [request, setRequest] = useState({ ...requestInitState });

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [msgConfig, setMsgConfig] = useState({
    txt: '',
    mode: '',
  });

  const router = useRouter();

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setRequest((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const campaign = Campaign(address);
      const accounts = await web3.eth.getAccounts();

      await campaign.methods
        .createRequest(
          request.description,
          web3.utils.toWei(request.amount, 'ether'),
          request.recipient
        )
        .send({ from: accounts[0] });

      setMsgConfig({ txt: 'Request created successfuly', mode: 'success' });
      router.replace(`/requests/${address}`);
    } catch (err) {
      setMsgConfig({
        txt: 'Somthing went wrong... try again later',
        mode: 'error',
      });
    } finally {
      setOpen(true);
      setLoading(false);
      setRequest({ ...requestInitState });
    }
  };

  return (
    <div style={{ marginTop: 46 }}>
      <PageHeader
        title="Create Request"
        description="create new request upon project essentials, expenses, etc"
      />

      <Grid className="request-create-grid" stackable>
        <Row>
          <CampaignDetailsAddresses
            title="Description"
            description="The reason for the request"
          >
            <Input
              name="description"
              value={request.description}
              size="small"
              className="request-create-input"
              onChange={handleChange}
            />
          </CampaignDetailsAddresses>

          <CampaignDetailsAddresses
            title="Amount"
            description="The amount in ether"
          >
            <Input
              type="number"
              name="amount"
              value={request.amount}
              size="small"
              label={{ basic: true, content: 'ether' }}
              onChange={handleChange}
              labelPosition="right"
              className="request-create-input"
            />
          </CampaignDetailsAddresses>
        </Row>

        <Row>
          <CampaignDetailsAddresses
            title="Recipient"
            description="The Recipient address, will probably look like 0xEe7d8455493899E69a590C5043fdF9c951bA4235"
          >
            <Input
              name="recipient"
              onChange={handleChange}
              value={request.recipient}
              size="small"
              className="request-create-input"
            />
          </CampaignDetailsAddresses>

          <Button
            loading={loading}
            onClick={handleSubmit}
            className="request-create-btn btn"
          >
            Create
          </Button>
        </Row>
      </Grid>

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
