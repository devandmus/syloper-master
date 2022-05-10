const PasswordRecovery = require('./passwordRecovery');
const WelcomeNewMember = require('./welcomeNewMember');
const dispatcher = require('./tasksDispatcher');


const Late = () => dispatcher({ overdue: true });

const Daily = () => dispatcher({ today: true });

const Upcoming = () => dispatcher({ week: true });


module.exports = {
  PasswordRecovery,
  WelcomeNewMember,
  Daily,
  Upcoming,
  Late,
}
