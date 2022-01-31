import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { gql,useLazyQuery,useQuery} from '@apollo/client'
import { useState, useEffect } from 'react'

//useLazyQuery : hara la peticion cuando ocurra un evento

//findPersonByName : es un nombre inventado para la query, puede ser cualquier otro nombre

//findPerson() es la query y el resolver creado el cual tiene la funcion de busca los datos de una person apartir del nombre
const FIND_PERSON = gql`
  query findPersonByName($nameToSearch: String!) {
    findPerson(name: $nameToSearch){
      name
    }
  }
`

const ALL_PERSONS = gql`
  query ViewerQuery {
    allPersons{
      name
    }
  }
`

const Home: NextPage = () => {
  //useQuery: lo que hace es que en cuanto se renderiza hace la peticion
  //para controlar cuando se hace la peticion podemos usar useLazyQuery
  const {data,error,loading} = useQuery(ALL_PERSONS);
  const [getPerson, result] = useLazyQuery(FIND_PERSON);
  //useLazyQuery: devolve un array de dos posiciones:
  // En la primera posicion es cuando queremos activar la consulta (getPerson)
  // la segunda posicion seria el resultado (result)

  const [person, setPerson] = useState(null);
  
  const showPerson = name => {
    getPerson({variables:{nameToSearch: name}})
  }
  if(error) return <span className="bg-red"></span>;

  useEffect(() => {
    if (result.data){
      setPerson(result.data.findPerson)
    }
  },[result])

  return (
    <>
      {loading ? <p>Loading...</p> : (
        <div>
          <h2>Persons</h2>
          {data.allPersons.map(p => (
          <div onClick={() => showPerson(p.name)}>
            {p.name}
          </div>))}
          {person === null ? null :  (<div>
            <h2>{person.name}</h2>
            <div>{person.city}</div>
            <button onClick={()=> setPerson(null)}>Close</button>
            </div>)
          }
        </div>
      )}
     
    </>
  )
}


export default Home;
