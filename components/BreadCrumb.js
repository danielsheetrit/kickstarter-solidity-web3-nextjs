import { useRouter } from 'next/router';

import { Breadcrumb as BCContainer } from 'semantic-ui-react';

const { Section, Divider } = BCContainer;

export default function BreadCrumb({ pathes }) {
  const router = useRouter();

  return (
    <BCContainer style={{ display: 'flex' }}>
      {pathes.map((path, index) => {
        return (
          <div key={path.href}>
            <Section
              key={path.href}
              active={router.asPath === path.href}
              onClick={() => router.push(path.href)}
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
