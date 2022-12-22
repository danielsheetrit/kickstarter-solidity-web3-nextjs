import { useState, useEffect } from 'react';
// next
import { useRouter } from 'next/router';

// Antd
import { AppstoreAddOutlined, PlusOutlined } from '@ant-design/icons';
import { Layout, Menu, Typography } from 'antd';

// components
import Loader from './Loader';

const { Title } = Typography;
const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Campaigns', '/', <AppstoreAddOutlined />),
  getItem('Create Campaign', '/create-campagin', <PlusOutlined />),
  // getItem('Team', 'sub2', <TeamOutlined />, [
  //   getItem('Team 1', '6'),
  //   getItem('Team 2', '8'),
  // ]),
];

export default function PageLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPageRoute, setCurrentPageRoute] = useState([]);

  const router = useRouter();

  useEffect(() => {
    if (router.pathname) {
      setCurrentPageRoute([router.pathname]);
    }

    if (window.innerWidth <= 768) {
      setCollapsed(true);
    }
  }, [router.pathname]);

  // loader logic
  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) => url === router.asPath && setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });
  console.log(currentPageRoute);
  return (
    <Layout style={{ minHeight: '100vh' }} hasSider>
      <Sider
        breakpoint="md" // md = 768
        onBreakpoint={(isBroken) => setCollapsed(isBroken)}
        theme="light"
        collapsedWidth={75}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Title
          style={{ padding: '16px', color: '#1890ff', fontWeight: 'bold' }}
          level={4}
        >
          Kick Coin
        </Title>

        <Menu
          theme="light"
          // defaultSelectedKeys={currentPageRoute}
          selectedKeys={currentPageRoute}
          mode="inline"
          items={items}
          onClick={({ key }) => router.push(key)}
        />
      </Sider>
      <Layout
        style={{
          paddingTop: '64px',
          paddingLeft: '32px',
          paddingRight: '32px',
        }}
      >
        {loading ? <Loader /> : children}
      </Layout>
    </Layout>
  );
}
