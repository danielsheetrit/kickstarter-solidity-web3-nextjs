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
          <Card.Header
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'end',
              flexWrap: 'wrap',
            }}
          >
            {title}
            {children}
          </Card.Header>

          <Card.Description
            style={{
              marginTop: 8,
              fontWeight: 'bold',
              color: '#3d98ff',
            }}
          >
            {description}
          </Card.Description>

          <span
            style={{
              color: 'gray',
              fontSize: 14,
              marginTop: 8,
              display: 'block',
            }}
          >
            {body}
          </span>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
}
