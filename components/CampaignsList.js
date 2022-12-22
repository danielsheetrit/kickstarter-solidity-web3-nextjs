import { Layout } from 'antd';
import CampaignCard from './CampaignCard';

export default function CampaignsList({ campaigns }) {
  return (
    <Layout>
      <div className='campaign-list-container'>
        {campaigns.map((campaign, idx) => (
          <CampaignCard key={idx} singleCampaign={campaign} />
        ))}
      </div>
    </Layout>
  );
}
