const express = require('express');
const { register, login, registerAdmin, getCurrentUser } = require('../controllers/authController');
const { authenticateToken, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

/**
 * @swagger
 * /api/auth/register-admin:
 *   post:
 *     summary: Registrar un administrador (Solo administradores)
 *     tags:
 *       - Autenticación
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Administrador registrado
 *       403:
 *         description: Acceso denegado
 */
router.post('/register-admin', authenticateToken, isAdmin, registerAdmin);
 
/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Registra un nuevo usuario
 *     tags:
 *       - Autenticación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               rol:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario registrado correctamente
 *       400:
 *         description: Error en la solicitud
 */
router.post('/register', register);

/**
 * @swagger
 * /api/auth/me:
 *   get:
 *     summary: Retorna los datos del usuario actual
 *     tags:
 *       - Autenticación
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Información del usuario actual
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nombre:
 *                   type: string
 *                 email:
 *                   type: string
 *                 rol:
 *                   type: string
 *       401:
 *         description: No autorizado
 */
router.get('/me', authenticateToken, getCurrentUser);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Inicia sesión
 *     tags:
 *       - Autenticación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario autenticado
 *       401:
 *         description: Credenciales inválidas
 */
router.post('/login', login);

module.exports = router;
