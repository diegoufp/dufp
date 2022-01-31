import '../styles/globals.css'
import type { AppProps } from 'next/app';
import {ApolloClient,ApolloProvider,InMemoryCache,HttpLink,gql} from "@apollo/client";

/*
Como indica el error, tendrá que usar una URL absoluta para lo fetchque está haciendo. Supongo que tiene algo que ver con los diferentes entornos (cliente y servidor) en los que se puede ejecutar su código. Las URL relativas simplemente no son lo suficientemente explícitas y confiables en este caso.
*/
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
      uri: "http://localhost:3000/api/graphql"
  })
})
/*
const query = gql`
  query ViewerQuery {
    allPersons{
      name
    }
  }
`
client.query({ query: query}).then(res => {
  console.log(res.data)
})
*/
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
