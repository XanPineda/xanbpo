# Sistema de Gestión de PQRS -- Backend (Node.js + Express + MySQL)

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

## 📂 Estructura del proyecto

    src/
     ├── controllers/
     ├── services/
     ├── routes/
     ├── middleware/
     ├── models/
     ├── config/
     ├── tests/
     │    └── gestion.e2e.test.js
     └── app.js

## ⚙️ Requisitos previos

-   Node.js 18+
-   MySQL o MariaDB
-   npm o yarn

## 🔧 Instalación

``` bash
git clone https://github.com/XanPineda/xanbpo.git
cd nombre-proyecto
npm install
cp .env.example .env
```

## ▶️ Ejecutar el servidor

``` bash
npm run dev
npm start
```

## 🧪 Pruebas

``` bash
npm test
```
