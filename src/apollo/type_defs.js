import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  enum Lang{
    en
    es
  }

  type NavLang{
    home: String!
    skills: String!
    portfolio: String!
    contact: String!
    lang: String!
  }

  type InfoSkills{
    img: String!
    title: String!
  }

  type Skills{
    _id: String
    skill: InfoSkills!
  }

  type Nav{
    _id: String
    nav: NavLang!
  }
  
  type Query{
    allNav: [Nav]!
    allSkills: [Skills]!
    findNavLang(lang: Lang): Nav!
  }
  type Mutation{
    addNavLang(
      home: String!
      skills: String!
      portfolio: String!
      contact: String!
      lang: String!
    ): Nav
    addSkill(
      img: String!
      title: String!): Skills
  }

`