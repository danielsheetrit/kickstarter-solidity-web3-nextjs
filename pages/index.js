import { useEffect, useState } from 'react';

// factory contract
import Factory from '../ethereum/factory';

import Meta from '../components/Meta';
import PageHeader from '../components/PageHeader';

export default function Home() {
  const [campaigns, setCampaigns] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const campaigns = await Factory.methods.getDeployedCampaigns().call();
  //       console.log(campaigns);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   })();
  // });

  return (
    <>
      <Meta />
      <PageHeader title="First Page" description="her you can do blala" />
    </>
  );
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`http://localhost:3000/api/factory`);

//   console.log(res);
//   const data = JSON.parse(JSON.stringify(res));

//   // Pass data to the page via props
//   return { props: { data } };
// }
