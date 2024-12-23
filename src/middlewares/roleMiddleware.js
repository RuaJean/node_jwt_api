exports.isAdmin = (req, res, next) => {
    if (req.user.rol !== 'administrador') {
      return res.status(403).json({ error: 'Acceso denegado' });
    }
    next();
  };
  