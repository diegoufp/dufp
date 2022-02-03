import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type NavLeng{
    home: String!
    skills: String!
    portfolio: String!
    contact: String!
    lang: String!
  }

  type Nav{
    _id: String
    nav: NavLeng!
  }
  
  type Query{
    allNav: [Nav]!
  }
  type Mutation{
    addNavLang(
      home: String!
      skills: String!
      portfolio: String!
      contact: String!
      lang: String!
    ): Nav
  }

`