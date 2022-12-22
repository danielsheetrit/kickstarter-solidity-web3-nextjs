import { Spin } from 'antd';

export default function Loader({ size }) {
  return (
    <div
      style={{
        height: '100vh',
        margin: '40vh auto',
      }}
    >
      <Spin size={size} />
    </div>
  );
}

Loader.defaultProps = {
  size: 'large',
};
