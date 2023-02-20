import { useState } from 'react';
import { Table, Button, Popup } from 'semantic-ui-react';

import { Router } from '../routes';

import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';

export default function RequestRow({
  request,
  requestId,
  approversCount,
  address,
  setMsgConfig,
  setOpen,
}) {
  const [isAdressShown, setIsAdressShown] = useState(false);

  const [loading, setLoading] = useState(false);
  const [finzlizeLoading, setFinzlizeLoading] = useState(false);

  const handleApprove = async () => {
    setLoading(true);

    const campaign = Campaign(address);

    try {
      const accounts = await web3.eth.getAccounts();

      await campaign.methods.approveRequest(requestId).send({
        from: accounts[0],
      });

      setMsgConfig({
        txt: 'Thank you for your approval!',
        mode: 'success',
      });

      Router.replaceRoute(`/campaigns/${address}/requests`);
    } catch (err) {
      setMsgConfig({
        txt: 'Something went wrong, try again later',
        mode: 'error',
      });
    } finally {
      setLoading(false);
      setOpen(true);
    }
  };

  const handleFinalize = async () => {
    setFinzlizeLoading(true);

    const campaign = Campaign(address);

    try {
      const accounts = await web3.eth.getAccounts();

      await campaign.methods.finalizeRequest(requestId).send({
        from: accounts[0],
      });

      setMsgConfig({
        txt: 'Request has finalized successfully, and will be sent to the provider',
        mode: 'success',
      });

      Router.replaceRoute(`/campaigns/${address}/requests`);
    } catch (err) {
      setMsgConfig({
        txt: 'Something went wrong, try again later',
        mode: 'error',
      });
    } finally {
      setFinzlizeLoading(false);
      setOpen(true);
    }
  };

  return (
    <>
      <Table.Row
        style={request.complete ? { backgroundColor: 'lightgreen' } : {}}
      >
        <Table.Cell>{requestId + 1}</Table.Cell>
        <Table.Cell>{request.description}</Table.Cell>
        <Table.Cell>{web3.utils.fromWei(request.value, 'ether')}</Table.Cell>
        <Table.Cell>
          <p
            style={{
              wordBreak: 'break-word',
              marginBottom: isAdressShown ? 16 : 0,
            }}
          >
            {isAdressShown ? request.recipient : ''}
          </p>
          <Button
            style={{ width: '100%', margin: 0 }}
            onClick={() => setIsAdressShown((prev) => !prev)}
            className="btn"
          >
            {isAdressShown ? 'Hide' : 'Show'}
          </Button>
        </Table.Cell>
        <Table.Cell>
          {request.approvalCount}/{approversCount}
        </Table.Cell>
        <Table.Cell>
          {!request.complete ? (
            <Button
              style={{ width: '100%', margin: 0 }}
              onClick={handleApprove}
              loading={loading}
              className="btn"
            >
              Approve
            </Button>
          ) : null}
        </Table.Cell>
        <Table.Cell>
          {!request.complete ? (
            <Button
              style={{ width: '100%', margin: 0 }}
              onClick={handleFinalize}
              loading={finzlizeLoading}
              className="btn"
            >
              Finzlize
            </Button>
          ) : (
            <p style={{ color: 'green' }}>Request has been finalized!</p>
          )}
        </Table.Cell>
      </Table.Row>
    </>
  );
}
