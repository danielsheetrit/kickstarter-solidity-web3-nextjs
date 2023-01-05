import { Card } from 'semantic-ui-react';

import CampaignCard from './CampaignCard';

export default function CampaignsList({ campaigns }) {
  return (
    <Card.Group>
      {campaigns.map((campaign, idx) => (
        <CampaignCard key={idx} singleCampaign={campaign} />
      ))}
    </Card.Group>
  );
}
