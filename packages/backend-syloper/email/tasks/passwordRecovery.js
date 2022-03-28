const { sendEmail } = require('../settings');


const TEMPLATE = ({ passwordTokenReset }) => `
<h1>Hello, please follow the link above to reset your password</h1>
<br />
<a
  target="_blank"
  href="http://localhost:8080/api/auth/set-password/${ passwordTokenReset }"
>
  Password Recovery
</a>
`;


const PasswordRecovery = ({ email, passwordTokenReset }) =>
  sendEmail({
    to: email,
    subject: 'Password Recovery',
    template: TEMPLATE({ passwordTokenReset }),
  });


module.exports = PasswordRecovery;
