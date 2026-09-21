import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>pragyan&apos;s corner</title>
        <meta
          name="description"
          content="Pragyan Yadav | UConn student researching Physics and Computer Science. Interested in AI, physics, and philosophy."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Layout>
        <div className="min-h-screen">
          <Component {...pageProps} />
        </div>
      </Layout>
    </>
  );
}

export default MyApp;