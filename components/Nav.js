import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { Header, Icon, Menu, Button, Divider } from 'semantic-ui-react';

// import { Router } from '../routes';

const EXCLUDED_CLASSNAME = 'excluded-for-outside-click';

const routes = [
  {
    path: '/',
    name: 'Campaigns',
    icon: <Icon name="th list" />,
  },
  {
    path: '/campaigns/create',
    name: 'Create Campaign',
    icon: <Icon name="plus" />,
  },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);
  const router = useRouter();

  const handleNavigation = (e, { name }) => {
    setIsOpen(false);
    const route = routes.find((obj) => obj.name === name);
    router.push(route.path);
  };

  const handleClick = (event) => {
    const splitted = event.target.className.split(' ');

    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      !splitted.includes(EXCLUDED_CLASSNAME)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  });

  return (
    <>
      <div className="nav-box-flex">
        <Header as="h1" className="nav-logo">
          <Icon name="rocket" className="rocket-icon-nav" />
          KickCoin
        </Header>

        <Button
          className={`hamburger-button ${EXCLUDED_CLASSNAME} btn`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <Icon name="bars" className={EXCLUDED_CLASSNAME} />
          menu
        </Button>

        <div ref={ref} className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <div className="menu-flex">
            <Divider style={{ width: '100%' }} />
            {routes.map((route) => {
              return (
                <Menu.Item
                  icon={route.icon}
                  className="menu-flex-item"
                  key={route.path}
                  name={route.name}
                  active={router.pathname === route.path}
                  onClick={handleNavigation}
                />
              );
            })}
          </div>
        </div>
      </div>

      <Divider className="nav-divider" />
    </>
  );
}
