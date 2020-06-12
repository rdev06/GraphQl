const { Users } = require('../constants');

module.exports = {
  Task: {
    user: ({ userId }) => Users.find(u => u.id == userId)
  }
};
