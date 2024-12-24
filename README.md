# 

Este proyecto implementa una API RESTful para la gestión de usuarios, empleados y solicitudes. Es parte de una prueba técnica, desarrollado con **Node.js** y **PostgreSQL**, siguiendo las mejores prácticas de programación.

---

## **Características Principales**

1. **Autenticación y Autorización con JWT**:
    - Roles: `administrador` y `empleado`.
    - Solo los administradores pueden registrar otros administradores.
2. **CRUD Completo**:
    - **Usuarios**: Registro e inicio de sesión.
    - **Empleados**: Consulta y creación.
    - **Solicitudes**: Consulta, creación y eliminación.
3. **Documentación con Swagger**:
    - Disponible en http://localhost:3001/api/docs.
4. **CORS y Seguridad**:
    - Configuración de CORS para proteger el acceso.
    - Roles manejados exclusivamente desde JWT.

---

## **Requisitos de Instalación**

### **1. Pre-requisitos**

- **Node.js**: v16 o superior.
- **PostgreSQL**: Instalado y configurado.
- **npm**: Instalado junto con Node.js.

### **2. Variables de Entorno**

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```
DB_URL=postgres://jeanrua@localhost:5432/empresa
JWT_SECRET=nor0TuF0BmjUoaiqkD3h
PORT=3001

```

### **3. Clonar el Repositorio**

```bash
git clone https://github.com/RuaJean/node_jwt_api.git
cd node_jwt_api

```

### **4. Instalar Dependencias**

```bash
npm install

```