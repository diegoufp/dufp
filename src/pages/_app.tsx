import '../styles/globals.css'
import type { AppProps } from 'next/app';
import {ApolloClient,ApolloProvider,InMemoryCache,HttpLink,gql} from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
      uri: process.env.URI_CLIENT
  })
})


function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>

  )
}

export default MyApp
