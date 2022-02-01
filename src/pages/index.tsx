import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { gql,useLazyQuery,useQuery} from '@apollo/client'
import { useState, useEffect } from 'react'

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
  const {data,error,loading} = useQuery(ALL_PERSONS);
  const [getPerson, result] = useLazyQuery(FIND_PERSON);
  
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
