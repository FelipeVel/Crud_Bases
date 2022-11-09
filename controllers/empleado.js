const { registrar } = require('../services/empleado/registrar')
const { consultar } = require('../services/empleado/consultar')
const { login } = require('../services/empleado/login')

async function _registrar(empleado) {
    return await registrar(empleado);
}

async function _consultar(correo) {
    return await consultar(correo);
}

async function _login(credenciales) {
    return await login(credenciales);
}

module.exports = {
    _registrar, _consultar, _login
}