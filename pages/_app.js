// css imports
import '../styles/global.css';
import '../styles/campaigns.css';
import '../styles/campaign-list.css';
import '../styles/campaign-card.css';
import '../styles/nav.css';
import '../styles/loader.css';
import '../styles/section-header.css';
import '../styles/requests-button.css';
import '../styles/request-create.css';
import '../styles/campaign-details-card.css';
import '../styles/campaign-details-addresses.css';

// semantic
import 'semantic-ui-css/semantic.min.css';

// components
import PageLayout from '../components/PageLayout';

function MyApp({ Component, pageProps }) {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
}

export default MyApp;
