const Router = require('koa-router');
const handler = require('../handler/auth.handler');
const handlerPass = require('../handler/password.handler');

const authRouter = new Router({ prefix: '/auth' });

authRouter.post('/login', handler.login);


//Password RESET
authRouter.post('/recover', [
    check('email').isEmail().withMessage('Enter a valid email address'),
], validate, handlerPass.recover);

authRouter.get('/reset/:token', handlerPass.reset);

authRouter.post('/reset/:token', [
    check('password').not().isEmpty().isLength({min: 6}).withMessage('Must be at least 6 chars long'),
    check('confirmPassword', 'Passwords do not match').custom((value, {req}) => (value === req.body.password)),
], validate, handlerPass.resetPassword);



module.exports = authRouter;
