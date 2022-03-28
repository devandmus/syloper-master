const Users = require("../../database/models/User.model");
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
          60 * 60 * 24 * 30 * 365
        )
      };
      const token = jwt.sign(
        datos,
        config.JWT_SECRET
      );
      return {status: 200, accessToken: token};
    }
  }
  return {status: 401, error: "No authorized"};
};


const getUsers = async () => {
  const users = await Users.find();
  const data = JSON.parse(JSON.stringify(users));
  return {status: 200, users: data};
}


const createPasswordToken = async email => {
  const data = {
    email,
    exp: Date.now() + (1000 * 60 * 15)
  };
  const token = jwt.sign(data, config.JWT_SECRET);
  return await Users.findOneAndUpdate(
    { email },
    { passwordTokenReset: token},
    {new: true}
  );
};


const passwordTokenValidator = async token =>
  jwt.verify(token, config.JWT_SECRET);


const setNewPassword = async ({ email, password }) =>
  await Users.findOneAndUpdate(
    { email },
    { password, passwordTokenReset: null },
    { new: true }
  );


module.exports = {
  getUser,
  getUsers,
  createPasswordToken,
  passwordTokenValidator,
  setNewPassword,
}
