import { useEffect } from "react";

import "../styles/globals.css";
import splitbee from "@splitbee/web";
import NextNProgress from "nextjs-progressbar";

import Layout from "../components/layout";

function App({ Component, pageProps }) {
  useEffect(() => {
    splitbee.init();
  }, []);

  return (
    <Layout>
      <NextNProgress height={2} options={{ showSpinner: false }} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
