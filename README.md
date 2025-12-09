# Sistema de BPO -- Backend (Node.js + Express + MySQL)

Este proyecto implementa un sistema backend para un Contact Center en el que
se registran y se consultan gestiones realizadas por asesores a clientes.\
Incluye un sistema de CRUD completo degestiones, validaciones,
paginación eficiente y pruebas E2E.

## 🚀 Tecnologías utilizadas

-   Node.js + Express
-   MySQL / MariaDB
-   Sequelize ORM
-   JWT para autenticación
-   Bcrypt para hashing de contraseñas
-   Jest + Supertest para pruebas E2E
-   Arquitectura MVC + Services
-   Validación de datos con middleware personalizado

## 📊 Cómo crear la Base de Datos desde Workbench

A continuación se encuentra el código en lenguaje SQL para poder crear la base de datos del proyecto

CREATE DATABASE bpo_prueba CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'bpo_user'@'%' IDENTIFIED BY 'bpo_pass';
GRANT ALL PRIVILEGES ON bpo_prueba.* TO 'bpo_user'@'%';
FLUSH PRIVILEGES;

## 📂 Estructura del proyecto

    ├─ node_modules
    ├─ package.json
    ├─ package-lock.json
    ├─ .env.example
    ├─ .gitignore
    ├─ README.md
    └─ src/
        ├── controllers/
        ├── services/
        ├── routes/
        ├── middlewares/
        ├── models/
        ├── config/
        ├── validators/
        ├── tests/
        │    └── gestion.e2e.test.js
        ├── server.js
        └── app.js

## ⚙️ Requisitos previos

-   Node.js 18+
-   MySQL o MariaDB
-   npm o yarn
-   Librerías de Jest y Supertest

## 🔧 Instalación

``` bash
git clone https://github.com/XanPineda/xanbpo.git
cd xanbpo
npm install
cp .env.example .env
```

## ▶️ Ejecutar el servidor

``` bash
node src/server.js
```

## 🧪 Pruebas

``` bash
npm test
```
