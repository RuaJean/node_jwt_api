const { Sequelize, DataTypes } = require('@jest-mock/sequelize');
require('dotenv').config();

const sequelize = new Sequelize();

const Usuario = sequelize.define('Usuario', {
  nombre: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  rol: DataTypes.STRING,
});

module.exports = { sequelize, Usuario };
