import { Container } from 'semantic-ui-react';

// components
import Nav from './Nav';

export default function PageLayout({ children }) {
  return (
    <Container
      style={{
        paddingBottom: 100,
      }}
    >
      <Nav />
      {children}
    </Container>
  );
}
