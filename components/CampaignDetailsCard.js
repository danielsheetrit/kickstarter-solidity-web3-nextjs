import { Card, Grid } from 'semantic-ui-react';

export default function CampaignDetailsCard({
  title,
  description,
  body,
  children,
}) {
  return (
    <Grid.Column stretched width={8}>
      <Card style={{ width: '100%', borderRadius: 0 }}>
        <Card.Content>
          <Card.Header className="campaign-details-card-header">
            {title}
            {children}
          </Card.Header>

          <Card.Description className="campaign-details-card-description">
            {description}
          </Card.Description>

          <span className="campaign-details-card-description-secondary">
            {body}
          </span>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
}
