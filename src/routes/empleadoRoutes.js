const express = require('express');
const { createEmpleado, getEmpleados } = require('../controllers/empleadoController');
const router = express.Router();

/**
 * @swagger
 * /api/empleados:
 *   post:
 *     summary: Crea un empleado
 *     tags:
 *       - Empleados
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               puesto:
 *                 type: string
 *     responses:
 *       201:
 *         description: Empleado creado
 *       400:
 *         description: Error en la solicitud
 */
router.post('/', createEmpleado);

/**
 * @swagger
 * /api/empleados:
 *   get:
 *     summary: Obtiene una lista de empleados
 *     tags:
 *       - Empleados
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de empleados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   nombre:
 *                     type: string
 *                   puesto:
 *                     type: string
 */
router.get('/', getEmpleados);

module.exports = router;
