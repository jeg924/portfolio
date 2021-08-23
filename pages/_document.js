import Document, { Html, Head, Main, NextScript } from "next/document";
import { jsx, css, Global } from "@emotion/react";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <Global
            styles={{
              body: {
                height: "100vh",
                width: "100vw",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                margin: 0,
              },
              "#__next": {
                height: "100vh",
                width: "100vw",
                display: "flex",
                flexDirection: "column",
              },
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
