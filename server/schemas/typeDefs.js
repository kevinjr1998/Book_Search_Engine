const { gql } = require('apollo-server-express');

const typeDefs = gql`
  input SavedBookContent {
    authors: [String]
    description: String
    bookId: String!
    image: String
    link: String!
    title: String!
  }

  type User {
    _id: ID!
    username: String
    email: String
    bookCount: String
    savedBooks: [SavedBook]
  }

  type SavedBook {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutations {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(content: SavedBookContent!): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
