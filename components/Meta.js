import Head from 'next/head';

export default function Meta({ title, keywords, description }) {
  return (
    <Head>
      <meta name="viewport" content="width-device-width, initial-scale-1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Righteous&family=Sofia+Sans+Extra+Condensed:ital,wght@1,600&display=swap"
        rel="stylesheet"
      />

      <title>{title}</title>
    </Head>
  );
}

Meta.defaultProps = {
  title: 'Kick Coin',
  keywords: 'ideas, innovations, startups, funding',
  description: 'Find funding for your startup',
};
