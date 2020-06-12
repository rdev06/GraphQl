const { gql } = require('apollo-server-express');
const user = require('./user');
const task = require('./task');

const typeDefs = gql`
  type Query {
    _: String
  }
  type Mutation {
    _: String
  }
`;

module.exports = [typeDefs, user, task];
