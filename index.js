const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const app = express();
app.use(express.json());
const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');
const ensureLoggedIn = require('./ensureLoggedIn');

const apolloserver = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    await ensureLoggedIn(req);
    return {
      userData: req.userData
    };
  }
});
apolloserver.applyMiddleware({ app, path: '/graphql' });

app.get('/', (req, res) => res.send('working'));

app.listen(3000, () => console.log(`server listen on port 3000`));
