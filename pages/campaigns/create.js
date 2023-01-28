import { useState } from 'react';

import Factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

import PageHeader from '../../components/PageHeader';
import Meta from '../../components/Meta';

import {
  Button,
  Container,
  Form,
  Header,
  Icon,
  Input,
  Progress,
  Segment,
} from 'semantic-ui-react';

export default function Create() {
  const [minContribution, setMinContribution] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const amount = parseFloat(minContribution, 10);

    if (amount <= 0 || isNaN(amount)) return;

    setStatus('loading');

    try {
      const accounts = await web3.eth.getAccounts();

      await Factory.methods.createCampaign(amount).send({
        from: accounts[0],
      });

      setStatus('complete');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const progressUi = (status) => {
    const output = {
      progress: { error: true },
      txt: 'Something went wrong, try again later',
    };

    switch (status) {
      case 'loading':
        output.progress = { active: true };
        output.txt = (
          <p>
            After approve Transaction in Metamask <br /> It could take
            approximately up to 15 seconds
          </p>
        );
        break;
      case 'complete':
        output.progress = { success: true };
        output.txt = (
          <p>
            Transaction successfully completed <br /> the campaign is availbe
            under Campaigns tab
          </p>
        );
        break;
      default:
        break;
    }

    return (
      <Progress style={{ width: 300 }} percent={100} {...output.progress}>
        {output.txt}
      </Progress>
    );
  };

  return (
    <>
      <Meta title="Kick Coin | Create Campaign" />

      <PageHeader
        title="Create Campaign"
        description="Initialize a Campaign for your purpose"
      />

      <Segment
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: status ? 40 : 16,
        }}
        placeholder
      >
        <Header icon style={{ marginBottom: 24 }}>
          <Icon
            style={{ fontSize: 26, marginBottom: 8 }}
            name="asterisk"
            color="grey"
          />
          Minimum contribution is required <br /> in order to inform donators
          about this campaign
        </Header>

        <Segment.Inline>
          {status && progressUi(status)}

          {!status && (
            <Form onSubmit={handleSubmit}>
              <Container
                style={{
                  display: 'flex',
                  width: '100%',
                }}
              >
                <Form.Field
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Input
                    onChange={(ev) => setMinContribution(ev.target.value)}
                    value={minContribution}
                    type="number"
                    labelPosition="right"
                    placeholder="Minimum contribution"
                    label={{ basic: true, content: 'wei' }}
                    style={{ marginBottom: 0, marginRight: 24 }}
                  />

                  <Button className="btn">Create</Button>
                </Form.Field>
              </Container>
            </Form>
          )}
        </Segment.Inline>
      </Segment>
    </>
  );
}
