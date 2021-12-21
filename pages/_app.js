import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";

import Layout from "../components/layout";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <NextNProgress height={2} options={{ showSpinner: false }} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
