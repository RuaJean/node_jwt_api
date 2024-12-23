module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Empleado', {
      nombre: { type: DataTypes.STRING, allowNull: false },
      puesto: { type: DataTypes.STRING, allowNull: false },
    });
  };
  