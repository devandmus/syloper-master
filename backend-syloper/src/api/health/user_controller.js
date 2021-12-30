const Users = require("../modelos/user_models");
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/validToken');

module.exports.login = async ctx => {
    try
    {
        const email = ctx.request.body["email"];
        const password = ctx.request.body["password"];
        const user = await Users.findOne({ email, active: true });
        if(user){
            const match = await user.checkPassword(password);
            if(match){
                const datos = {
                    sub: user.id,
                    exp: Math.floor(Date.now() / 1000) + (60 * 120)
                };
                const token = jwt.sign(datos,"0PKRQLVSdXyn9fa0vdB51B2pnHknYWGnwnOKAZve0umO46vVRWsWIn35GSvY");
                const {status, ...body} = { status: 200, accessToken: token };
                ctx.status = status;
                ctx.body = body;
            }
            else{
                const {status, ...body} = { status: 401, error: "No Autorizado" };
                ctx.status = status;
                ctx.body = body;
            }
        }
        else{
            const {status, ...body} = { status: 401, error: "No Autorizado" };
            ctx.status = status;
            ctx.body = body;
        }
    }
    catch(error)
    {
        const {status, ...body} = { status: 500, error: "Interno del servidor" };
        ctx.status = status;
        ctx.body = body;
        console.log("ERROR: " + error);
    }
};

module.exports.register = async ctx => {
    try
    {
        const validado = await auth.validarToken(ctx);
        if(validado){
            ctx.body = await Users.create(ctx.request.body);
        }
        else{
            console.error("ERROR ELSE");
        }
    }
    catch(err){
        ctx.status = 400;
        ctx.body = err;
    }
};

module.exports.listar = async ctx => {
    try{
        const validado = await auth.validarToken(ctx);
        if(validado){
            const user = await Users.find();
            const datos = JSON.parse(JSON.stringify(user));
            const {status, ...body} = { status: 200, users: datos };
            ctx.status = status;
            ctx.body = body;
        }
        else{
            console.error("ERROR ELSE");
        }
    }
    catch(err){
        console.log("ERROR CATCH listar:" + err);
    }
};