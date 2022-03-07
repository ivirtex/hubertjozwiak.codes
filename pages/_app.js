// @ts-check
import { useEffect } from "react";

import "../styles/globals.css";
import splitbee from "@splitbee/web";
import NextNProgress from "nextjs-progressbar";

function App({ Component, pageProps }) {
  useEffect(() => {
    splitbee.init();
  }, []);

  return (
    <div>
      <NextNProgress height={2} options={{ showSpinner: false }} />
      <Component {...pageProps} />
    </div>
  );
}

export default App;
