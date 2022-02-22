const User = require('../models/user_models');
const USERS = require('./users.json');

const init = async () => {
  const exist = await User.findOne({ email: USERS[0].email });
  if (!exist) loadUsers();
};

function loadUsers() {
  USERS.forEach(user => {
    const instance = new User({
      name: user.name,
      email: user.email,
      password: user.password,
    });
    instance.save();
  });
}

module.exports = init;
