const { Sequelize } = require('sequelize');

if (!process.env.DB_URL) {
  throw new Error('DB_URL no está definida en las variables de entorno');
}

const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: 'postgres',
  logging: false,
});

module.exports = sequelize;
 