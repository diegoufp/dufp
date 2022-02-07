import '../styles/globals.css'
import type { AppProps } from 'next/app';
import {ApolloProvider} from "@apollo/client";
import Header from 'components/Header';
import { client } from 'apollo/client';

function MyApp({ Component, pageProps }: AppProps) {
  
  
  return (
      <ApolloProvider client={client}>
        <Header/>
        <Component {...pageProps} />
      </ApolloProvider>

  )
}

export default MyApp

//cambiar la mutacion de findPOrtfolioLang para que retorne una lista de todos los proyectos del portafolio del mismo idoma
// hace los objetos de mongodb unicos para que no se repitan los datos