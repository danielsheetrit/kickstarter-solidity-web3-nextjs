import { Grid, Header } from 'semantic-ui-react';
const { Column } = Grid;

export default function CampaignDetailsAddresses({
  title,
  description,
  address,
  children,
}) {
  return (
    <Column stretched width={8}>
      <Header style={{ margin: 0 }} as="h4">
        {title}
      </Header>
      <span className="campaign-details-addresses-desc">{description}</span>
      <p className="campaign-details-addresses-address">{address}</p>

      {children}
    </Column>
  );
}
