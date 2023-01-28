import { Button, Form, Header, Input } from 'semantic-ui-react';

export default function CampaignDetailsContribute() {
  return (
    <div style={{ marginTop: 48, matginLeft: 0, width: '100%' }}>
      <Header as="h3">Contribute to this campaign</Header>

      <Form>
        <Input
          //   onChange={(ev) => setMinContribution(ev.target.value)}
          //   value={minContribution}
          type="number"
          labelPosition="right"
          placeholder="contribution"
          label={{ basic: true, content: 'wei' }}
          style={{ width: 125, marginBottom: 0, marginRight: 56 }}
        />
        <Button>Contribute</Button>
      </Form>
    </div>
  );
}
