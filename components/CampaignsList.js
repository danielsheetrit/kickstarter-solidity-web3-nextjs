import { Card } from 'semantic-ui-react';

import Message from './Message';
import CampaignCard from './CampaignCard';

export default function CampaignsList({ campaigns }) {
  if (campaigns.length === 0) {
    return (
      <Message
        iconName="inbox"
        bodyTxt="You don't have any campaigns yet."
        linkTxt="Create new campaign"
        linkPath="/campaigns/create"
      />
    );
  }

  return (
    <Card.Group className='campaign-list'>
      {campaigns.map((campaign) => (
        <CampaignCard key={campaign} singleCampaign={campaign} />
      ))}
    </Card.Group>
  );
}
