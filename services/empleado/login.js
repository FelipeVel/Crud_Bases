const db =  require('../../models');
const bcrypt = require('bcrypt')

async function login(credenciales) {
    if (!credenciales.correo ||
    !credenciales.clave) {
        throw new Error("Los parametros estan incompletos");
    }

    const existente = await db.empleado.findOne({
        where:{
            correo:credenciales.correo
        }
    });

    if(!existente){
        throw new Error("Usuario y/o contraseña incorrectos");
    }

    const match = bcrypt.compareSync(credenciales.clave, existente.clave);

    if(!match){
        throw new Error("Usuario y/o contraseña incorrectos");
    }

    return existente
}

module.exports = {
    login
};