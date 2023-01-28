import { Link } from '../routes';

import { Card, Divider, Button } from 'semantic-ui-react';

export default function CampaignCard({ singleCampaign }) {
  return (
    <Card className="campaign-card">
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
        <Button className="btn" size='mini'>
          <Link
            style={{ color: '#333' }}
            route={`campaigns/${singleCampaign}`}
          >
            View More
          </Link>
        </Button>
      </Card.Description>
    </Card>
  );
}
