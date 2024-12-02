// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Google Fonts Link for Source Sans Pro */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap"
          />
        </Head>
        <body style={{ fontFamily: '"Source Sans Pro", sans-serif' }} className="antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
