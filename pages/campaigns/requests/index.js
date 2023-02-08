import Meta from '../../../components/Meta';
import PageHeader from '../../../components/PageHeader';
import RequestCreate from '../../../components/RequestCreate';

export default function Requests({ address }) {
  return (
    <>
      <Meta title="Kick Coin | Requests" />

      <PageHeader
        title="Requests"
        description="Browse requests and create new ones"
      />

      <RequestCreate address={address} />
    </>
  );
}

Requests.getInitialProps = (props) => {
  const { address } = props.query;

  return { address };
};
