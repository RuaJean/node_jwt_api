const { registerAdmin, login } = require('../controllers/authController');
const { Usuario } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Mock de bcrypt y jsonwebtoken
jest.mock('bcrypt');
jest.mock('jsonwebtoken');

// Mock del modelo Usuario
jest.mock('../models', () => ({
  Usuario: {
    create: jest.fn(),
    findOne: jest.fn(),
  },
}));

describe('authController', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('registerAdmin', () => {
    it('debería registrar un administrador exitosamente', async () => {
      const mockReq = {
        body: { nombre: 'Admin Test', email: 'admin@test.com', password: 'password123' },
        user: { rol: 'administrador' },
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      bcrypt.hash.mockResolvedValue('hashed_password');
      Usuario.create.mockResolvedValue({
        id: 1,
        nombre: 'Admin Test',
        email: 'admin@test.com',
        rol: 'administrador',
      });

      await registerAdmin(mockReq, mockRes);

      expect(bcrypt.hash).toHaveBeenCalledWith('password123', 10);
      expect(Usuario.create).toHaveBeenCalledWith({
        nombre: 'Admin Test',
        email: 'admin@test.com',
        password: 'hashed_password',
        rol: 'administrador',
      });
      expect(mockRes.status).toHaveBeenCalledWith(201);
      expect(mockRes.json).toHaveBeenCalledWith({
        id: 1,
        nombre: 'Admin Test',
        email: 'admin@test.com',
      });
    });

    it('debería retornar un error si el rol no es administrador', async () => {
      const mockReq = {
        body: {},
        user: { rol: 'empleado' },
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await registerAdmin(mockReq, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(403);
      expect(mockRes.json).toHaveBeenCalledWith({ error: 'Acceso denegado' });
    });
  });

  describe('login', () => {
    it('debería autenticar un usuario exitosamente', async () => {
      const mockReq = {
        body: { email: 'admin@test.com', password: 'password123' },
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const mockUser = {
        id: 1,
        email: 'admin@test.com',
        password: 'hashed_password',
        rol: 'administrador',
      };

      Usuario.findOne.mockResolvedValue(mockUser);
      bcrypt.compare.mockResolvedValue(true);
      jwt.sign.mockReturnValue('mock_token');

      await login(mockReq, mockRes);

      expect(Usuario.findOne).toHaveBeenCalledWith({ where: { email: 'admin@test.com' } });
      expect(bcrypt.compare).toHaveBeenCalledWith('password123', 'hashed_password');
      expect(jwt.sign).toHaveBeenCalledWith(
        { id: 1, rol: 'administrador' },
        expect.any(String),
        { expiresIn: '100h' }
      );
      expect(mockRes.json).toHaveBeenCalledWith({ token: 'mock_token' });
    });

    it('debería retornar error si el usuario no existe', async () => {
      const mockReq = {
        body: { email: 'notfound@test.com', password: 'password123' },
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      Usuario.findOne.mockResolvedValue(null);

      await login(mockReq, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(401);
      expect(mockRes.json).toHaveBeenCalledWith({ error: 'Credenciales inválidas' });
    });
  });
});
