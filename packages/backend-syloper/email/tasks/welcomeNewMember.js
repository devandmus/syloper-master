const config = require('../../config');
const { sendEmail } = require('../settings');

const TEMPLATE = ({ passwordTokenReset }) => `
<h1>Welcome!</h1>
<p>Set your new password here, click on the bottom</p>
<br />
<a
  target="_blank"
  href="${config.HOST}/api/auth/set-password/${ passwordTokenReset }"
>
  Set Your New Password
</a>
`;


const welcomeNewMember = ({ email, passwordTokenReset }) =>
  sendEmail({
    to: email,
    subject: 'Welcome to Syloper',
    template: TEMPLATE({ passwordTokenReset }),
  });


module.exports = welcomeNewMember;
