import { Link } from '../routes';

import { Card, Divider } from 'semantic-ui-react';

export default function CampaignCard({ singleCampaign }) {
  return (
    <Card style={{ maxWidth: 342 }}>
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
        <Link
          style={{ textDecoration: 'underline' }}
          route={`campaigns/${singleCampaign}`}
        >
          View More
        </Link>
      </Card.Description>
    </Card>
  );
}
