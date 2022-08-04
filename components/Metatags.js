import Head from 'next/head';

export default function Metatags({
  title = 'The Blog',
  description = 'Dev.to mock up',
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="example meta" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
{/* Open Graph meta */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Head>
  );
}