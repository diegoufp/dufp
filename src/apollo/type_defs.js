import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Person {
    name: String!
    city: String!
  }
  type Query {
    personCount: Int!
    allPersons: [Person]!
    findPerson(name: String!) : Person
  }
`