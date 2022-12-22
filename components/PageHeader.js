import { Typography, Divider } from 'antd';

const { Title, Text } = Typography;

export default function PageHeader({ title, body, withoutDevider }) {
  return (
    <div>
      <Title style={{ fontWeight: 'bold' }} level={1}>
        {title}
      </Title>
      <Text>{body}</Text>
      {!withoutDevider && <Divider style={{ borderBlockStart: '1.5px solid #1890ff' }} />}
    </div>
  );
}
