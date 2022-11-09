const db =  require('../../models');

async function consultar(correo) {
    if (!correo) {
        throw new Error("No ha diligenciado el correo")
    }

    return await db.empleado.findOne({
        where:{
            correo
        }
    })
}

module.exports = {
    consultar
};