import { useRouter } from 'next/router';

import { Breadcrumb as BCContainer } from 'semantic-ui-react';
import { Router } from '../routes';

const { Section, Divider } = BCContainer;

export default function BreadCrumb({ pathes }) {
  const { asPath } = useRouter();

  return (
    <BCContainer style={{ display: 'flex' }}>
      {pathes.map((path, index) => {
        return (
          <div key={path.href}>
            <Section
              key={path.href}
              active={asPath === path.href}
              onClick={() => Router.pushRoute(path.href)}
            >
              {path.name}
            </Section>
            {index !== pathes.length - 1 && <Divider />}
          </div>
        );
      })}
    </BCContainer>
  );
}
