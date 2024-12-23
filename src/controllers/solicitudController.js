const { Solicitud } = require('../models');

// Crear solicitud
exports.createSolicitud = async (req, res) => {
  try {
    const { descripcion, estado, id_empleado } = req.body;
    const solicitud = await Solicitud.create({ descripcion, estado, id_empleado });
    res.status(201).json(solicitud);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener lista de solicitudes
exports.getSolicitudes = async (req, res) => {
  try {
    const solicitudes = await Solicitud.findAll();
    res.json(solicitudes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar solicitud
exports.deleteSolicitud = async (req, res) => {
  try {
    const { id } = req.params;
    const solicitud = await Solicitud.destroy({ where: { id } });
    if (!solicitud) {
      return res.status(404).json({ error: 'Solicitud no encontrada' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
