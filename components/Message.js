import { Link } from '../routes';
import { Container, Icon, Message } from 'semantic-ui-react';

export default function MessageCard({ iconName, bodyTxt, linkTxt, linkPath }) {
  return (
    <Message>
      <Container style={{ display: 'flex', alignItems: 'center' }}>
        {iconName && (
          <Icon
            name={iconName}
            color="grey"
            style={{ marginRight: 20, fontSize: 26 }}
          />
        )}
        <Container>
          <p style={{ marginBottom: 0 }}>{bodyTxt}</p>
          {linkTxt && <Link route={linkPath}>{linkTxt}</Link>}
        </Container>
      </Container>
    </Message>
  );
}
