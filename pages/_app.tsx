// pages/_app.tsx
import React from 'react';
import Head from 'next/head';
import '../styles/style.css';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Common SEO tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Le Vinh Khang's personal website and information." />

        {/* Title */}
        <title>Le Vinh Khang - Personal Website</title>

        {/* Open Graph metadata */}
        <meta property="og:title" content="Le Vinh Khang - Personal Website" />
        <meta property="og:description" content="Le Vinh Khang's personal website and information." />
        <meta property="og:image" content="URL to your profile picture or logo" />
        <meta property="og:url" content="URL to your personal website" />
        <meta name="og:type" content="website" />

        {/* Additional metadata specific to your content */}
        {/* <meta name="keywords" content="List of relevant keywords" /> */}
        {/* <link rel="canonical" href="URL to the canonical version of this page" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
