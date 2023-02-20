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

import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
}

export default MyApp;
