import { Grid, Label } from 'semantic-ui-react';
import Link from 'next/link';

import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';

import Meta from '../../components/Meta';
import PageHeader from '../../components/PageHeader';
import CampaignDetailsCard from '../../components/CampaignDetailsCard';
import CampaignDetailsContribute from '../../components/CampaignDetailsContribute';
import CampaignDetailsAddresses from '../../components/CampaignDetailsAddresses';
import BreadCrumb from '../../components/BreadCrumb';

const { Row } = Grid;

export default function CampaignDetails({
  campaignAddress,
  minContribution,
  balance,
  requestsCount,
  approversCount,
  manager,
}) {
  return (
    <>
      <Meta title="Kick Coin | Campaign Information" />

      <PageHeader
        title="Campaign Information"
        description="Campaign balance, minimum contribution, requests amount and more"
      />

      <BreadCrumb
        pathes={[
          { name: 'Campaigns', href: '/' },
          {
            name: 'Campaign Information',
            href: `/campaigns/${campaignAddress}`,
          },
        ]}
      />

      <Grid style={{ marginTop: 32 }}>
        <Row>
          <CampaignDetailsCard
            title="Minimum Contribution"
            description={`${minContribution} (wei)`}
            body="You must contribute at least this much wei to become an approver"
          />
          <CampaignDetailsCard
            title="Balance"
            description={`${web3.utils.fromWei(balance, 'ether')} (ether)`}
            body="The balance is how much money this campaign has left to spend"
          />
        </Row>
        <Row>
          <CampaignDetailsCard
            title="Requests Amount"
            description={requestsCount}
            body="A request tries to withdraw money from the campaign, Requests must be approved by the approvers"
          >
            <Link href={`/requests/${campaignAddress}`}>
              <Label className="requsts-btn btn">View Requests</Label>
            </Link>
          </CampaignDetailsCard>

          <CampaignDetailsCard
            title="Approvers Amount"
            description={approversCount}
            body="Number of people who have already donate this campaign"
          />
        </Row>
      </Grid>

      <CampaignDetailsContribute address={campaignAddress} />

      <Grid stackable style={{ marginTop: 48 }}>
        <Row>
          <CampaignDetailsAddresses
            title="Campaign No."
            description="Unique Address that represents the campaign, and can be reconized by"
            address={campaignAddress}
          />
          <CampaignDetailsAddresses
            title="Manager Address"
            description="The manager created this campaign and can create requests to withdraw money"
            address={manager}
          />
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
