const Router = require('koa-router');
const handler = require('../handler/auth.handler');

const authRouter = new Router({ prefix: '/auth' });

authRouter.post('/login', handler.login);
authRouter.post('/forgotPassword', handler.forgotPassword);

//Password RESET
authRouter.post('/recover', [
    check('email').isEmail().withMessage('Enter a valid email address'),
], validate, Password.recover);

authRouter.get('/reset/:token', Password.reset);

authRouter.post('/reset/:token', [
    check('password').not().isEmpty().isLength({min: 6}).withMessage('Must be at least 6 chars long'),
    check('confirmPassword', 'Passwords do not match').custom((value, {req}) => (value === req.body.password)),
], validate, Password.resetPassword);



module.exports = authRouter;
