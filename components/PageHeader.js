import { Typography } from 'antd';

const { Title, Text } = Typography;

export default function PageHeader({ title, description }) {
  return (
    <>
      <Title style={{ fontWeight: 'bold' }} level={1}>
        {title}
      </Title>
      <Text strong>{description}</Text>
    </>
  );
}
