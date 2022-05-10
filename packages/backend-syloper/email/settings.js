const config = require('../config');
const nodemailer = require('nodemailer');

const email = config.EMAIL_ACCOUNT;
const password = config.EMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password,
  },
});


const sendEmail = ({ to, subject, template }) => {
  if (to === 'subadmin@syloper.com' || to === 'admin@syloper.com')
    return false;
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


module.exports = {
  sendEmail,
}





