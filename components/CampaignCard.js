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
        <Button
          style={{ width: '100%', padding: 0 }}
          className="btn"
          size="mini"
        >
          <Link
            style={{
              color: 'whitesmoke',
              width: '100%',
              display: 'block',
              padding: '10px',
            }}
            route={`campaigns/${singleCampaign}`}
          >
            View More
          </Link>
        </Button>
      </Card.Description>
    </Card>
  );
}
