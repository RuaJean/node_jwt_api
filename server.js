require('dotenv').config();
const app = require('./src/app');
const PORT = process.env.PORT || 3000;
// const swaggerUi = require('swagger-ui-express');
// const swaggerSpec = require('./config/swagger');

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// // Swagger
// app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// console.log('Documentación de la API disponible en http://localhost:3000/api/docs');


