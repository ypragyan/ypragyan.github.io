import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Helio — AI-Powered Energy Intelligence for Residential Solar</title>
        <meta
          name="description"
          content="Helio forecasts solar generation from 15 minutes to days ahead and automatically routes power between solar, battery, and grid."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./logo.svg" type="image/svg+xml" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
