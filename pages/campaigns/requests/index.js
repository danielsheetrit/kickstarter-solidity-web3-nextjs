import Campaign from '../../../ethereum/campaign';

import Meta from '../../../components/Meta';
import PageHeader from '../../../components/PageHeader';
import RequestsList from './RequestsList';
import RequestCreate from '../../../components/RequestCreate';
import Message from '../../../components/Message';
import BreadCrumb from '../../../components/BreadCrumb';

export default function Requests({
  address,
  requests,
  requestsCount,
  approversCount,
}) {
  return (
    <>
      <Meta title="Kick Coin | Requests" />

      <PageHeader
        title="Requests"
        description="Browse requests and create new ones"
      />

      <BreadCrumb
        pathes={[
          { name: 'Campaigns', href: '/' },
          {
            name: 'Campaign Information',
            href: `/campaigns/${address}`,
          },
          {
            name: 'Requests',
            href: `/campaigns/${address}/requests`,
          },
        ]}
      />

      <div style={{ marginTop: 46 }}>
        {requests.length > 0 ? (
          <RequestsList
            requests={requests}
            requestsCount={requestsCount}
            address={address}
            approversCount={approversCount}
          />
        ) : (
          <Message
            iconName="inbox"
            bodyTxt="This campaign has no requests yet."
            mode="warning"
          />
        )}
      </div>

      <RequestCreate address={address} />
    </>
  );
}

Requests.getInitialProps = async (props) => {
  const { address } = props.query;

  const campaign = Campaign(address);

  let requestsCount = await campaign.methods.getRequestsNum().call();
  requestsCount = parseInt(requestsCount, 10);

  const requests = await Promise.all(
    Array(requestsCount)
      .fill()
      .map((_elem, index) => {
        return campaign.methods.requests(index).call();
      })
  );

  const approversCount = await campaign.methods.approversCount().call();

  return { address, requests, requestsCount, approversCount };
};
