import Meta from '../../../components/Meta';
import PageHeader from '../../../components/PageHeader';

export default function Requests() {
  return (
    <>
      <Meta title="Kick Coin | Requests" />

      <PageHeader
        title="Requests"
        description="Browse requests and create new ones"
      />
    </>
  );
}

Requests.getInitialProps = (props) => {
  const { address } = props.query;

  return { address };
};
