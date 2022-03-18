const { checkUserForPassword } = require('../controller/users.controller');


const forgotPassword = async ctx => {
  const email = ctx.request.body["email"]
  await checkUserForPassword(email)

}

module.exports = {
  forgotPassword
}
