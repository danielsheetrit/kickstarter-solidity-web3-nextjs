// css imports
import '../styles/global.css';
import '../styles/campaigns.css';
import '../styles/campaigns-list.css';

// components
import PageLayout from '../components/PageLayout';

function MyApp({ Component, pageProps }) {
  return (
    <PageLayout>
      <Component {...pageProps} />;
    </PageLayout>
  );
}

export default MyApp;
