const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type user {
    _id: ID!
    username: String
    email: String
    password: String
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

  type Query {
    getUser(userId: id!) : user!
  }

  type Mutation {
    addProfile(name: String!): Profile
    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile(profileId: ID!): Profile
    removeSkill(profileId: ID!, skill: String!): Profile
  }
`;

module.exports = typeDefs;
