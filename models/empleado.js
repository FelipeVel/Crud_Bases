const Sequelize = require("sequelize-oracle");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('empleado',{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        nombre:{
            type: Sequelize.STRING,
            required:true,
            allowNull:false
        },
        apellido:{
            type: Sequelize.STRING,
            required:true,
            allowNull:false
        },
        tipo_documento:{
            type: Sequelize.STRING,
            required:true,
            allowNull:false
        },
        numero_documento:{
            type: Sequelize.INTEGER,
            required:true,
            allowNull:false
        },
        correo:{
            type: Sequelize.STRING,
            required:true,
            allowNull:false
        },
        clave:{
            type: Sequelize.STRING,
            required:true,
            allowNull:false
        }
    },{
        underscored:true,
        paranoid: true
    });
}