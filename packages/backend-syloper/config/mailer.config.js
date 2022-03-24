require('dotenv').config();
const config = require('./');

const nodemailer = require('nodemailer');

const email = config.EMAIL_ACCOUNT;
const password = config.EMAIL_PASSWORD;
const host = config.HOST;
const port = config.PORT;

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: email,
    pass: password,
  },
});

module.exports.sendEmail = (user) => {
  transporter
    .sendMail({
      from: `"Admin Syloper" <${email}>`, // sender address
      to: user.email, // list of receivers
      subject: 'Recover Password', // Subject line
      html: `
            <h1>Recover Password</h1>
            <a href="${host}:${port}/api/auth/reset/${user.resetPasswordToken}">Click here</a>
          `,
    })
    .then(() => {
      console.log(`email sent to ${user.id}`);
    })
    .catch((err) => {
      console.error('error sending mail', err);
    });
};