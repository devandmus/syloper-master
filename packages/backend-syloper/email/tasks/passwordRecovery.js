const { sendEmail } = require('../settings');

// TODO: integration .env
const HOST = 'http://localhost:8080';

const TEMPLATE = ({ passwordTokenReset }) => `
<h1>Hello, please follow the link above to reset your password</h1>
<br />
<a
  target="_blank"
  href="${HOST}/api/auth/set-password/${ passwordTokenReset }"
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
