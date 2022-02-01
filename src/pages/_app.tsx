import '../styles/globals.css'
import type { AppProps } from 'next/app';
import {ApolloClient,ApolloProvider,InMemoryCache,HttpLink,gql} from "@apollo/client";

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: new HttpLink({
      uri: "http://localhost:3000/api/graphql"
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
