import Head from "next/head";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Learnables</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/learnable.ico" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
