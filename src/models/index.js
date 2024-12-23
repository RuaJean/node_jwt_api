const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');

const Usuario = require('./Usuario')(sequelize, DataTypes);
const Empleado = require('./Empleado')(sequelize, DataTypes);
const Solicitud = require('./Solicitud')(sequelize, DataTypes);

module.exports = { sequelize, Usuario, Empleado, Solicitud };
