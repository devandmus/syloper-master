const sendEmail = require('./settings').sendEmail;

const TEMPLATE = `
<h1>HELLOOOO</h1>
<a href="#">Hereee</a>
`;

const passwordRecovery = () => {
  sendEmail({
    to: 'contact.a.maldonado@gmail.com',
    subject: 'Subject',
    template: TEMPLATE,
  })
}

if (require.main === module) {
  passwordRecovery();
}
