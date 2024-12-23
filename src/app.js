require('dotenv').config();
const express = require('express');
const { sequelize } = require('./models');
const authRoutes = require('./routes/authRoutes');
const empleadoRoutes = require('./routes/empleadoRoutes');
const solicitudRoutes = require('./routes/solicitudRoutes');
const { authenticateToken } = require('./middlewares/authMiddleware');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Documentación Swagger
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
console.log('Documentación de la API disponible en http://localhost:3000/api/docs');

// Endpoint para obtener el JSON de Swagger
app.get('/api/docs.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec); // Devuelve el esquema JSON
});

// Rutas sin autenticación
app.use('/api/auth', authRoutes);

// Rutas protegidas por autenticación
app.use('/api/empleados', authenticateToken, empleadoRoutes);
app.use('/api/solicitudes', authenticateToken, solicitudRoutes);

// Conexión y sincronización de la base de datos
(async () => {
  try {
    await sequelize.sync(); // Sincroniza los modelos con la base de datos
    console.log('Conexión a la base de datos exitosa');
  } catch (error) {
    console.error('Error conectando a la base de datos:', error);
  }
})();

module.exports = app;
