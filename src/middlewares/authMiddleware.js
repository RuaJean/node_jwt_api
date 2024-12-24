const jwt = require('jsonwebtoken');
const { secret } = require('../config/jwt');

exports.authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  try {
    const user = jwt.verify(token, secret);
    req.user = user; 
    next();
  } catch (error) {
    res.status(403).json({ error: 'Token inválido' });
  }
};

exports.isAdmin = (req, res, next) => {
  if (req.user.rol !== 'administrador') {
    return res.status(403).json({ error: 'Acceso denegado: Solo administradores' });
  }
  next();
};
