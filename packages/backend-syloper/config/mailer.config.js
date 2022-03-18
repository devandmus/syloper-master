const nodemailer = require('nodemailer');

const email = config.EMAIL_ACCOUNT;

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: email,
    pass: config.EMAIL_PASSWORD,
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
                <a href="http://localhost:8080/api/users/${user.id}/activate">Click here</a>
              `,
    })
    .then(() => {
      console.log(`email sent to ${user.id}`);
    })
    .catch((err) => {
      console.error('error sending mail', err);
    });
};