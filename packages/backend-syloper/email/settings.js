const config = require('../config');
const nodemailer = require('nodemailer');

// TODO: clean up here
const email = config.EMAIL_ACCOUNT;
const password = config.EMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'arquitecturadeservidores@gmail.com',
    pass: 'mzmmzmzzmzmmzmzzm1!',
  },
});


module.exports.sendEmail = ({ to, subject, template }) => {
  transporter
    .sendMail({
      to,
      subject,
      html: template,
      from: `"Syloper App" <${email}>`,
    })
    .then(() => {
      console.log(`email sent to ${ to }`);
    })
    .catch((err) => {
      console.error('error sending mail', err);
    });
};
