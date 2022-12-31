// factory contract
import Factory from '../ethereum/factory';

// components
import Meta from '../components/Meta';
// import PageHeader from '../components/PageHeader';
import CampaignsList from '../components/CampaignsList';

export default function Campaigns({ campaigns }) {
  return (
    <div>
      <Meta title="Kick Coin | Campaigns" />

      {campaigns && <CampaignsList campaigns={campaigns} />}
    </div>
  );
}

Campaigns.getInitialProps = async () => {
  const campaigns = await Factory.methods.getCampaigns().call();
  return { campaigns };
};
