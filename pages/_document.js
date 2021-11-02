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
              "*": {
                boxSizing: "border-box", // this allows padding to be substracted from width, rather than added
                // so width: 100%; padding: 10px = 100% box w/ padding on the inside RATHER THAN 100% + 20px width.
              },
              html: {
                fontFamily: "Lato, sans-serif",
              },
              "h1,h2,h3,h4,h5,h6": {
                margin: 0,
              },
              body: {
                height: "100vh",
                width: "100vw",
                display: "flex",
                flexDirection: "column",
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
