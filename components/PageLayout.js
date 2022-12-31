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

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
    };
  });

  return (
    <Container text className='layout-container'>
      <Nav />
      {loading ? <Loader /> : children}
    </Container>
  );
}
