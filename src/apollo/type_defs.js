import { gql } from 'apollo-server-micro';

export const typeDefs = gql`

  enum Lang{
    en
    es
  }

  type InfoRequired{
    form: String!
    name: String!
    email: String!
    subject: String
    comments: String!
    lang: Lang!
  }

  type Required{
    _id: String
    required: InfoRequired!
  }

  type InfoRegex{
    form: String!
    name: String!
    email: String!
    subject: String
    comments: String!
    lang: Lang!
  }

  type Regex{
    _id: String
    regex: InfoRegex!
  }


  type InfoPlaceholder{
    form: String!
    name: String!
    email: String!
    subject: String
    comments: String!
    lang: Lang!
    submit: String!
  }
  
  type Placeholder{
    _id: String
    placeholder: InfoPlaceholder!
  }

  type NavLang{
    home: String!
    skills: String!
    portfolio: String!
    contact: String!
    lang: Lang!
  }

  type InfoSkills{
    img: String!
    title: String!
  }

  type InfoAboutMe{
    presentation: String!
    name: String!
    stand: String!
    lang: Lang!
  }

  type InfoPortfolio{
    title: String!
    text: String!
    img: String!
    lang: Lang!
    more: String
    name: String!
  }

  type Portfolio{
    _id: String
    portfolio: InfoPortfolio!
  }

  type AboutMe{
    _id: String
    aboutMe: InfoAboutMe!
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
    findNavLang(lang: Lang!): Nav!
    findAboutMeLang(lang: Lang!): AboutMe!
    findPortfolioLang(lang: Lang!, name: String!): Portfolio!
    findRequiredLang(lang: Lang!, form: String!): Required!
    findRegexLang(lang: Lang!, form: String!): Regex!
    findPlaceholderLang(lang: Lang!, form: String!): Placeholder!


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
    addAboutMeLang(
      presentation: String!
      name: String!
      stand: String!
      lang: String!
    ): AboutMe
    addPortfolioLang(
      name: String!
      title: String!
      text: String!
      more: String
      lang: Lang!
      img: String!
    ): Portfolio


    addRequiredLang(
      form: String!
      name: String!
      email: String!
      subject: String
      comments: String!
      lang: Lang!
    ): Required

    addRegexLang(
      form: String!
      name: String!
      email: String!
      subject: String
      comments: String!
      lang: Lang!
    ):Regex

    addPlaceholderLang(
      form: String!
      name: String!
      email: String!
      subject: String
      comments: String!
      lang: Lang!
      submit: String!
    ):Placeholder
  }

`