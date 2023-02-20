import { Link } from '../routes';

import { Card, Divider, Button } from 'semantic-ui-react';

export default function CampaignCard({ singleCampaign }) {
  return (
    <Card style={{ borderRadius: 0 }} className="campaign-card">
      <Card.Content className="campaign-card-header">
        <div style={{ width: '100%' }}>
          <span style={{ fontWeight: 'bold' }}>Campaign Address</span>
          <p style={{ overflowWrap: 'break-word' }}>{singleCampaign}</p>
        </div>
      </Card.Content>
      <Divider className="campaign-card-divider" />
      <Card.Description className="campaign-card-desc">
        <Link route={`campaigns/${singleCampaign}`}>
          <Button
            style={{ width: '100%', height: 36 }}
            className="btn"
            size="mini"
          >
            View More
          </Button>
        </Link>
      </Card.Description>
    </Card>
  );
}
