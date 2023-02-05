import { Breadcrumb as BCContainer } from 'semantic-ui-react';
import { Router } from '../routes';

const { Section, Divider } = BCContainer;

export default function BreadCrumb({ links }) {
  return (
    <BCContainer>
      {links.map((link, index) => {
        return (
          <>
            <Section onClick={() => Router.pushRoute(link)}>
              {link.linkName}
            </Section>
            {index !== links.length - 1 && <Divider />}
          </>
        );
      })}
    </BCContainer>
  );
}
