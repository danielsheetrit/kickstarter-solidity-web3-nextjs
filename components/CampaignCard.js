import { Button, Card, Tooltip } from 'antd';
import { EyeOutlined } from '@ant-design/icons';

export default function CampaignCard({ singleCampaign }) {
  return (
    <>
      <Card
        size="small"
        title={singleCampaign}
        extra={
          <div style={{ marginInlineStart: '0.5rem' }}>
            <Button style={{ marginRight: '0.8rem' }} href="#">
              More
            </Button>
            <Tooltip placement="topLeft" title={singleCampaign}>
              <EyeOutlined style={{ fontSize: '1rem' }} />
            </Tooltip>
          </div>
        }
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </>
  );
}
