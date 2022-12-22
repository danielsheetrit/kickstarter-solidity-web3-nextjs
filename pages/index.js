// factory contract
import Factory from '../ethereum/factory';

// components
import Meta from '../components/Meta';
import PageHeader from '../components/PageHeader';
import CampaignsList from '../components/CampaignsList';

// antd
import { Button, Divider } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export default function Campaigns({ campaigns }) {
  return (
    <>
      <Meta />
      <div className="flex-row-between">
        <PageHeader
          withoutDevider
          title="Campaings"
          body="Here you can find a list of all the campaigns."
        />
        <Button type="primary" icon={<PlusOutlined />} size="large">
          Create Campaign
        </Button>
      </div>

      <Divider style={{ borderBlockStart: '1.5px solid #1890ff' }} />
      <CampaignsList campaigns={campaigns} />
    </>
  );
}

Campaigns.getInitialProps = async () => {
  const campaigns = await Factory.methods.getCampaigns().call();
  return { campaigns };
};
