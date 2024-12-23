const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Usuario } = require('../models');
const { secret, expiresIn } = require('../config/jwt');

// Registro de un administrador (solo administradores pueden registrar otros administradores)
exports.registerAdmin = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    if (req.user.rol !== 'administrador') {
      return res.status(403).json({ error: 'Acceso denegado' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await Usuario.create({
      nombre,
      email,
      password: hashedPassword,
      rol: 'administrador',
    });

    res.status(201).json({ id: user.id, nombre: user.nombre, email: user.email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Registro de empleados (permite registrar un empleado con rol fijo)
exports.register = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await Usuario.create({
      nombre,
      email,
      password: hashedPassword,
      rol: 'empleado',
    });

    res.status(201).json({ id: user.id, nombre: user.nombre, email: user.email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Inicio de sesión
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Usuario.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const token = jwt.sign({ id: user.id, rol: user.rol }, secret, { expiresIn });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
