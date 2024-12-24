module.exports = {
    secret: process.env.JWT_SECRET || 'default_secret',
    expiresIn: '100h',
  };
  