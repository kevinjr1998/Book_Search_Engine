const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    bookCount: String
    savedBooks: [savedBook]
  }

  type savedBook {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Auth {
    token: String!
    user: User
  }

  type Query {
    me: User
  }

  input: SavedBookContent {
    authors: [String]
    description: String
    bookId: String!
    image: String
    link: String!
    title: String!
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(content: SavedBookContent!): User
    removeBook(bookId: bookId): User
  }
`;

module.exports = typeDefs;
