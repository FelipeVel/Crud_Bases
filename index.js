const port = process.env.PORT || 3080;
const express = require('express');
const app = express();
const db = require('./models');
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/empleado', require('./routes/empleado'));

app.listen(port, ()=>{
    console.log(`Servidor corriendo en el puerto ${port}`)
});

db.sequelize.sync({force : false})
.then(()=>console.log("Conectado a la BD"))
.catch(e=>console.log(`Error en conexión (${e})`));