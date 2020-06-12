const { Tasks } = require('../constants');
module.exports = {
  Query: {
    tasks: (_, input, { userData }) => {
      console.log(userData);
      return Tasks;
    },
    task: (_, { id }) => Tasks.find(t => t.id == id)
  },
  Mutation: {
    createTask: (_, { input }) => {
      const task = { ...input, id: Tasks.length + 1 };
      Tasks.push(task);
      return task;
    }
  }
};
