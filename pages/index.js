// factory contract
import Factory from '../ethereum/factory';

// components
import Meta from '../components/Meta';
import CampaignsList from '../components/CampaignsList';
import PageHeader from '../components/PageHeader';

export default function Campaigns({ campaigns }) {
  return (
    <>
      <Meta title="Kick Coin | Campaigns" />

      <PageHeader
        title="Campaigns"
        description="Here you can find a list of all the campaigns you have created"
      />

      {campaigns && <CampaignsList campaigns={campaigns} />}
    </>
  );
}

Campaigns.getInitialProps = async () => {
  const campaigns = await Factory.methods.getCampaigns().call();
  return { campaigns };
};
