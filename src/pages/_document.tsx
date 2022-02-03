
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      <meta charSet="UTF-8"></meta>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preconnect" href="https://fonts.gstatic.com" ></link>
      </Head>
      <body>
        <Main/>
        <NextScript />
      </body>
    </Html>
  )
}