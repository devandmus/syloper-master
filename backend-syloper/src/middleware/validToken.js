const Users = require("../api/modelos/user_models");
const jwt = require('jsonwebtoken');

module.exports.validarToken = async ctx => {
    if(ctx.request.headers.authorization !== null && typeof ctx.request.headers.authorization !== 'undefined'){
        const token = ctx.request.headers.authorization.replace("Bearer ","");
        const valor = jwt.verify(token, process.env.JWT_SECRET);
        return valor ? true : false;
    }
};

module.exports.estaAutenticado = async ctx => {
    console.log("autenticado: " + ctx.body);
    if(ctx.body !== null && typeof ctx.body !== 'undefined'){
        console.log(ctx.request.body);
        return ;
    }
    else{
        console.error("No Autorizado");
    }
};