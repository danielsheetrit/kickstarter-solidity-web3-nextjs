import { Link } from '../routes';

import { Card, Divider, Button } from 'semantic-ui-react';

export default function CampaignCard({ singleCampaign }) {
  return (
    <Card style={{ borderRadius: 0 }} className="campaign-card">
      <Card.Content className="campaign-card-header">
        <div style={{ width: '100%' }}>
          <p style={{ overflowWrap: 'break-word' }}>
            <span style={{ fontWeight: 'bold' }}>Campaign No. </span>
            {singleCampaign}
          </p>
        </div>
      </Card.Content>
      <Divider className="campaign-card-divider" />
      <Card.Description className="campaign-card-desc">
        <Link route={`campaigns/${singleCampaign}`}>
          <Button style={{ width: '100%' }} className="btn" size="mini">
            View More
          </Button>
        </Link>
      </Card.Description>
    </Card>
  );
}
