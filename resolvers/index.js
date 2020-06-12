const user = require('./user');
const task = require('./task');
const root = {
  Query: {
    _: () => 'root'
  },
  Mutation: {
    _: () => 'root'
  }
};
module.exports = [root, user, task];
