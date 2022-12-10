import { useState, useEffect } from 'react';

// Antd
import { RiseOutlined, TeamOutlined } from '@ant-design/icons';
import { Layout, Menu, Typography } from 'antd';

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
  getItem('Option 1', '1', <RiseOutlined />),
  getItem('Team', 'sub2', <TeamOutlined />, [
    getItem('Team 1', '6'),
    getItem('Team 2', '8'),
  ]),
];

export default function PageLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setCollapsed(true);
    }
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }} hasSider>
      <Sider
        breakpoint="md"
        onBreakpoint={(isBroken) => setCollapsed(isBroken)}
        theme="light"
        collapsedWidth={100}
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
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout
        style={{
          paddingTop: '64px',
          paddingLeft: '48px'
        }}
      >
        {children}
      </Layout>
    </Layout>
  );
}
