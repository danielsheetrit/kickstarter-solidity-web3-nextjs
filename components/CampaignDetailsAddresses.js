import { Grid, Header } from 'semantic-ui-react';
const { Column } = Grid;

export default function CampaignDetailsAddresses({
  title,
  description,
  address,
}) {
  return (
    <Column stretched width={8}>
      <Header style={{ margin: 0 }} as="h4">
        {title}
      </Header>

      <span
        style={{
          color: 'gray',
          overflowWrap: 'break-word',
          fontSize: 14,
          marginTop: 6,
        }}
      >
        {description}
      </span>

      <p
        style={{
          overflowWrap: 'break-word',
          fontSize: 16,
          marginTop: 6,
        }}
      >
        {address}
      </p>
    </Column>
  );
}
