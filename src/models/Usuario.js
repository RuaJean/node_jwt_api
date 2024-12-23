module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Usuario', {
      nombre: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
      rol: { type: DataTypes.ENUM('empleado', 'administrador'), allowNull: false },
    });
  };
  