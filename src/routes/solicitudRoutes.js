const express = require('express');
const { createSolicitud, getSolicitudes, deleteSolicitud } = require('../controllers/solicitudController');
const router = express.Router();

/**
 * @swagger
 * /api/solicitudes:
 *   post:
 *     summary: Crea una solicitud
 *     tags:
 *       - Solicitudes
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               descripcion:
 *                 type: string
 *               estado:
 *                 type: string
 *               id_empleado:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Solicitud creada
 *       400:
 *         description: Error en la solicitud
 */
router.post('/', createSolicitud);

/**
 * @swagger
 * /api/solicitudes:
 *   get:
 *     summary: Obtiene una lista de solicitudes
 *     tags:
 *       - Solicitudes
 *     responses:
 *       200:
 *         description: Lista de solicitudes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   descripcion:
 *                     type: string
 *                   estado:
 *                     type: string
 *                   id_empleado:
 *                     type: integer
 */
router.get('/', getSolicitudes);

/**
 * @swagger
 * /api/solicitudes/{id}:
 *   delete:
 *     summary: Elimina una solicitud por ID
 *     tags:
 *       - Solicitudes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la solicitud a eliminar
 *     responses:
 *       204:
 *         description: Solicitud eliminada
 *       404:
 *         description: Solicitud no encontrada
 */
router.delete('/:id', deleteSolicitud);

module.exports = router;
