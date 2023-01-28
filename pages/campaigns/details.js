import { Grid, Header, Label } from 'semantic-ui-react';

import Campaign from '../../ethereum/campaign';
import Meta from '../../components/Meta';

import PageHeader from '../../components/PageHeader';
import CampaignDetailsCard from '../../components/CampaignDetailsCard';
import CampaignDetailsContribute from '../../components/CampaignDetailsContribute';

const { Row, Column } = Grid;

export default function CampaignDetails({
  campaignAddress,
  minContribution,
  balance,
  requestsCount,
  approversCount,
  manager,
}) {
  const addressesCard = (title, address, description) => {
    return (
      <Column stretched width={8}>
        <Header style={{ margin: 0 }} as="h4">
          {title}
        </Header>

        <span
          style={{
            color: 'gray',
            overflowWrap: 'break-word',
            fontSize: 14,
            marginTop: 6,
          }}
        >
          {description}
        </span>

        <p
          style={{
            overflowWrap: 'break-word',
            fontSize: 16,
            marginTop: 6,
          }}
        >
          {address}
        </p>
      </Column>
    );
  };

  return (
    <>
      <Meta title="Kick Coin | Campaign Information" />

      <PageHeader
        title="Campaign Information"
        description="Campaign balance, minimum contribution, requests amount and more"
      />

      <Grid style={{ marginTop: 32 }}>
        <Row>
          <CampaignDetailsCard
            title="Minimum contribution"
            description={`${minContribution} (wei)`}
            body="You must contribute at least this much wei to become an approver"
          />
          <CampaignDetailsCard
            title="Balance"
            description={`${balance} (ether)`}
            body="The balance is how much money this campaign has left to spend"
          />
        </Row>
        <Row>
          <CampaignDetailsCard
            title="Requests Amount"
            description={requestsCount}
            body="A request tries to withdraw money from the campaign, Requests must be approved by the approvers"
          >
            <Label className="requsts-btn">View Requests</Label>
          </CampaignDetailsCard>

          <CampaignDetailsCard
            title="Approvers Amount"
            description={approversCount}
            body="Number of people who have already donate this campaign"
          />
        </Row>
      </Grid>

      <CampaignDetailsContribute />

      <Grid stackable style={{ marginTop: 48 }}>
        <Row>
          {addressesCard(
            'Campaign No.',
            campaignAddress,
            'Unique Address that represents the campaign, and can be reconized by'
          )}
          {addressesCard(
            'Manager Address',
            manager,
            'The manager created this campaign and can create requests to withdraw money'
          )}
        </Row>
      </Grid>
    </>
  );
}

CampaignDetails.getInitialProps = async (props) => {
  const campaign = Campaign(props.query.address);

  const summary = await campaign.methods.getSummary().call();

  return {
    campaignAddress: props.query.address,
    minContribution: summary[0],
    balance: summary[1],
    requestsCount: summary[2],
    approversCount: summary[3],
    manager: summary[4],
  };
};
