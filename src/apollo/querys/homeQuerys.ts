import { gql } from '@apollo/client';

export const ALL_SKILLS = gql`
query Query {
    allSkills {
      _id
      skill {
        img
        title
      }
    }
  }
`;

export const NAV_LANG = gql`
query Query($lang: Lang!) {
    findNavLang(lang: $lang) {
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

export const ABOUTME_LANG = gql`
query Query($lang: Lang!) {
    findAboutMeLang(lang: $lang) {
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

export const ALL_PORTFOLIO_LANG = gql`
query Query($lang: Lang!, $name: String!) {
    findPortfolioLang(lang: $lang, name: $name) {
      _id
      portfolio {
        text
        title
        img
        lang
        more
        name
      }
    }
  }
`;

export const REQUIRED_LANG = gql`
query Query($lang: Lang!, $form: String!) {
    findRequiredLang(lang: $lang, form: $form) {
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

export const REGEX_LAG = gql`
query Query($lang: Lang!, $form: String!) {
    findRegexLang(lang: $lang, form: $form) {
      _id
      regex {
        form
        email
        name
        subject
        comments
        lang
      }
    }
  }
`;

export const PLACEHOLDER_LAG = gql`
query Query($lang: Lang!, $form: String!) {
    findPlaceholderLang(lang: $lang, form: $form) {
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