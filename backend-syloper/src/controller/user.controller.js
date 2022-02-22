const Users = require("../../database/models/user_models");
const jwt = require('jsonwebtoken');
const config = require('../../config/settings');

const getUser = async ({
  email,
  password,
}) => {
  const user = await Users.findOne({email, active: true});
  if (user) {
    const match = await user.checkPassword(password);
    if (match) {
      const datos = {
        sub: user.id,
        exp: Math.floor(Date.now() / 1000) + (
          60 * 120
        )
      };
      const token = jwt.sign(
        datos,
        config.JWT_SECRET
      );
      return {status: 200, accessToken: token};
    }
  }
  return {status: 401, error: "No Autorizado"};
};

const getUsers = async () => {
  const users = await Users.find();
  const data = JSON.parse(JSON.stringify(users));
  return {status: 200, users: data};
}

module.exports = {
  getUser,
  getUsers,
}
