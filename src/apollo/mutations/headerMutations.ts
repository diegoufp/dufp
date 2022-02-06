import { gql } from '@apollo/client';

export const ADD_SKILLS = gql`
mutation Mutation($img: String!, $title: String!) {
    addSkill(img: $img, title: $title) {
      _id
      skill {
        img
        title
      }
    }
  }
`;

export const ADD_NAV = gql`
mutation Mutation($home: String!, $skills: String!, $portfolio: String!, $contact: String!, $lang: String!) {
    addNavLang(home: $home, skills: $skills, portfolio: $portfolio, contact: $contact, lang: $lang) {
      _id
      nav {
        home
        skills
        portfolio
        contact
        lang
      }
    }
  }
`;

export const ADD_ABOUTEME = gql`
mutation Mutation($presentation: String!, $name: String!, $stand: String!, $lang: String!) {
    addAboutMeLang(presentation: $presentation, name: $name, stand: $stand, lang: $lang) {
      _id
      aboutMe {
        presentation
        name
        stand
        lang
      }
    }
  }
`;

export const ADD_PORTFOLIO = gql`
mutation Mutation($name: String!, $title: String!, $text: String!, $lang: Lang!, $img: String!, $more: String) {
    addPortfolioLang(name: $name, title: $title, text: $text, lang: $lang, img: $img, more: $more) {
      _id
      portfolio {
        title
        text
        img
        lang
        more
        name
      }
    }
  }
`;

export const ADD_REQUIRED = gql`
mutation Mutation($form: String!, $name: String!, $email: String!, $comments: String!, $lang: Lang!, $subject: String) {
    addRequiredLang(form: $form, name: $name, email: $email, comments: $comments, lang: $lang, subject: $subject) {
      _id
      required {
        form
        name
        email
        subject
        comments
        lang
      }
    }
  }
`;


export const ADD_REGEX = gql`
mutation AddRegexLang($form: String!, $name: String!, $email: String!, $comments: String!, $lang: Lang!, $subject: String) {
    addRegexLang(form: $form, name: $name, email: $email, comments: $comments, lang: $lang, subject: $subject) {
      _id
      regex {
        form
        name
        subject
        email
        comments
        lang
      }
    }
  }
`;

export const ADD_PLACEHOLDER = gql`
mutation AddPlaceholderLang($form: String!, $name: String!, $email: String!, $comments: String!, $lang: Lang!, $submit: String!, $subject: String) {
    addPlaceholderLang(form: $form, name: $name, email: $email, comments: $comments, lang: $lang, submit: $submit, subject: $subject) {
      _id
      placeholder {
        form
        name
        email
        subject
        comments
        lang
        submit
      }
    }
  }
`;