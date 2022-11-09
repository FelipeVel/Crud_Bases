const db =  require('../../models');
const bcrypt = require('bcrypt')

async function registrar(empleado) {
    if (!empleado.nombre ||
    !empleado.apellido ||
    !empleado.tipo_documento ||
    !empleado.numero_documento ||
    !empleado.correo ||
    !empleado.clave) {
        throw new Error("Los parametros estan incompletos");
    }

    const existente = await db.empleado.findOne({
        where:{
            correo:empleado.correo
        }
    });

    if(existente){
        throw new Error("El correo ingresado ya existe");
    }

    return await db.empleado.create({
        ...empleado,
        clave: bcrypt.hashSync(empleado.clave,10),
    })
}

module.exports = {
    registrar
};