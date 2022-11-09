const express = require('express');
const router = express.Router();
const { _registrar, _consultar, _login } = require('../controllers/empleado');

router.post('/registrar', async (req,res) => {
    try {
        const empleado = await _registrar(req.body);
        return res.status(200).json({
            status: "successful",
            message: `El usuario ${empleado.nombre} ${empleado.apellido} ha sido creado`
        })
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "Ha habido un error creando el usuario",
            error: error.message
        })
    }
});

router.get('/consultar/:correo', async (req,res) => {
    try {
        const empleado = await _consultar(req.params.correo);
        return res.status(200).json({
            status: "successful",
            data: empleado
        })
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "Ha habido un error consultando el usuario",
            error: error.message
        })
    }
});

router.post('/login', async (req,res) => {
    try {
        const empleado = await _login(req.body);
        return res.status(200).json({
            status: "successful",
            message: 'Credenciales correctas',
            data: empleado
        })
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "Ha habido un error consultando credenciales",
            error: error.message
        })
    }
});

module.exports = router;