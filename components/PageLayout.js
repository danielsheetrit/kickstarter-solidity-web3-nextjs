import { useState, useEffect } from 'react';
// next
import { useRouter } from 'next/router';
import { Container } from 'semantic-ui-react';

// components
import Nav from './Nav';
import Loader from './Loader';

export default function PageLayout({ children }) {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  // loader logic
  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) => url === router.asPath && setLoading(false);
    const handleError = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleError);


    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
    };
  }, [router]);

  return (
    <Container style={{
      paddingBottom: 100
    }}>
      <Nav />
      {loading && <Loader />}
      {!loading && children}
    </Container>
  );
}
