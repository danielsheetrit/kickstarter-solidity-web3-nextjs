import { useEffect, useState } from 'react';
import { Card, Divider, Popup, Button } from 'semantic-ui-react';

export default function CampaignCard({ singleCampaign }) {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 465) {
      return setIsMobile(true);
    }

    return setIsMobile(false);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <Card fluid>
      <Card.Content className="campaign-card-header">
        <div style={{ width: '100%' }}>
          {isMobile ? singleCampaign.substring(0, 20) + '...' : singleCampaign}
        </div>
        {isMobile && (
          <Popup
            content={singleCampaign}
            trigger={
              <Button
                className="campaign-card-popup-btn"
                size="mini"
                icon="eye"
              />
            }
            position="top left"
            style={{ fontSize: '12px' }}
          />
        )}
      </Card.Content>
      <Divider className="campaign-card-divider" />
      <Card.Description className="campaign-card-desc">
        <a>View More</a>
      </Card.Description>
    </Card>
  );
}
