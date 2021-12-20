import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {
            //! Not working until system theme is fixed
            /* <meta
            name="theme-color"
            content="FFFFFFF"
            media="(prefers-color-scheme: light)"
          />
          <meta
            name="theme-color"
            content="#000000"
            media="(prefers-color-scheme: dark)"
          ></meta> */
          }
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
