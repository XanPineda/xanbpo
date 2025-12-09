const express = require("express");
const router = express.Router();

const gestionController = require("../controllers/gestionController");
const { validarCreacion, validarFiltros } = require("../validators/gestionValidator");
const validarCampos = require("../middlewares/validarCampos");

// Crear gestión
router.post(
    "/",
    validarCreacion,
    validarCampos,
    (req, res) => gestionController.crear(req, res)
);

// Obtener una gestión por ID
router.get(
    "/:id",
    (req, res) => gestionController.obtenerUno(req, res)
);

// Listar gestiones con filtros/paginación
router.get(
    "/",
    validarFiltros,
    validarCampos,
    (req, res) => gestionController.listar(req, res)
);

// Actualizar gestión
router.put(
    "/:id",
    // Para actualizaciones via PUT permitimos payloads parciales en esta prueba técnica
    // (no usar el validador de creación que exige campos obligatorios)
    (req, res) => gestionController.actualizar(req, res)
);

router.patch(
    "/:id",
    gestionController.actualizarParcial
);


// Eliminar gestión
router.delete(
    "/:id",
    (req, res) => gestionController.eliminar(req, res)
);

module.exports = router;