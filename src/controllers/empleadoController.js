const { Empleado } = require('../models');

// Crear empleado
exports.createEmpleado = async (req, res) => {
  try {
    const { nombre, puesto } = req.body;
    const empleado = await Empleado.create({ nombre, puesto });
    res.status(201).json(empleado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener lista de empleados
exports.getEmpleados = async (req, res) => {
  try {
    const empleados = await Empleado.findAll();
    res.json(empleados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
