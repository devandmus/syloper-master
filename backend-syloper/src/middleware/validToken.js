const jwt = require('jsonwebtoken');

module.exports.validarToken = async ctx => {
    if(ctx.request.headers.authorization !== null && typeof ctx.request.headers.authorization !== 'undefined'){
        const token = ctx.request.headers.authorization.replace("Bearer ","");
        const valor = jwt.verify(token, "0PKRQLVSdXyn9fa0vdB51B2pnHknYWGnwnOKAZve0umO46vVRWsWIn35GSvY");
        return valor ? true : false;
    }
};