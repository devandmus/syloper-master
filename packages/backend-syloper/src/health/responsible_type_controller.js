const RespTypes = require("../../database/models/responsible_type_models");
const auth = require('../middleware/authentication');

module.exports.register = async ctx => {
    try
    {
        const validado = await auth.validarToken(ctx);
        if(validado){
            ctx.body = await RespTypes.create(ctx.request.body);
        }
        else{
            const {status, ...body} = { status: 401, error: "No autorizado" };
            ctx.status = status;
            ctx.body = body;
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
            const rt = await RespTypes.find();
            const datos = JSON.parse(JSON.stringify(rt));
            const {status, ...body} = { status: 200, respType: datos };
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
