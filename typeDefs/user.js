const { gql } = require('apollo-server-express');
module.exports = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    tasks: [Task!]
  }
`;
