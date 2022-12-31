import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Container, Header, Menu, Icon } from 'semantic-ui-react';

const routes = [
  {
    path: '/',
    name: 'Campaigns',
  },
  {
    path: '/create-campaign',
    name: 'Create Campaign',
  },
];

export default function Nav() {
  const [currentPath, setCurrentPath] = useState('');

  const router = useRouter();

  const handleNavigation = (e, { name }) => {
    const route = routes.find((obj) => obj.name === name);

    setCurrentPath(name);
    router.push(route.path);
  };

  useEffect(() => {
    if (router.pathname) {
      console.log('inside');
      setCurrentPath(router.pathname);
    }
  }, [router.pathname]);

  return (
    <Container className="nav-container">
      <div className="nav-box-flex">
        <Header as="h1" className="nav-logo">
          <Icon name='rocket' className='rocket-icon-nav' />
          KickCoin
        </Header>

          <Menu className='nav-menu' secondary>
            {routes.map((route) => {
              return (
                <Menu.Item
                  key={route.path}
                  name={route.name}
                  active={router.pathname === route.path}
                  onClick={handleNavigation}
                />
              );
            })}
          </Menu>
      </div>
    </Container>
  );
}
