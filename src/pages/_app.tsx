import '../styles/globals.css'
import type { AppProps } from 'next/app';
import {ApolloClient,ApolloProvider,InMemoryCache,HttpLink,gql,useMutation} from "@apollo/client";
import Header from 'components/Header';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
      uri: process.env.URI_CLIENT
  })
})


function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ApolloProvider client={client}>
        <Header/>
        <Component {...pageProps} />
      </ApolloProvider>

  )
}

export default MyApp
/*
export async function getStaticProps() {
  // hace los objetos de mongodb unicos para que no se repitan los datos
  //hacer las querys en un archivo y esportarlas
  //hacer las mutaciones en un archivo aparte y exportarlas

  useMutation()

  //const query = gql``

  //const { data } = await client.query({query})
  return {
    props: {
      
    }
  }
}*/

//cambiar la mutacion de findPOrtfolioLang para que retorne una lista de todos los proyectos del portafolio del mismo idoma