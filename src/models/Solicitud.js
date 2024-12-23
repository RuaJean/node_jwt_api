module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Solicitud', {
      descripcion: { type: DataTypes.TEXT, allowNull: false },
      estado: { type: DataTypes.ENUM('abierta', 'cerrada'), allowNull: false },
      id_empleado: { type: DataTypes.INTEGER, allowNull: false },
    });
  };
  