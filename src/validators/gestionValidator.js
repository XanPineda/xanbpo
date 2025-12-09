const { check, query } = require("express-validator");

exports.validarCreacion = [
    check("clienteDocumento")
        .notEmpty().withMessage("El documento del cliente es obligatorio")
        .isLength({ max: 15 }).withMessage("Máximo 15 caracteres"),

    check("clienteNombre")
        .notEmpty().withMessage("El nombre del cliente es obligatorio")
        .isLength({ max: 50 }),

    check("asesorId")
        .notEmpty().withMessage("El ID del asesor es obligatorio")
        .isLength({ max: 15 }),

    check("tipificacion")
        .notEmpty().withMessage("La tipificación es obligatoria")
        .isIn([
            "Contacto Efectivo",
            "No Contacto",
            "Promesa de Pago",
            "Pago Realizado",
            "Refinanciación",
            "Información",
            "Escalamiento",
            "Otros"
        ]).withMessage("Tipificación no válida"),

    check("subtipificacion")
        .optional()
        .isLength({ max: 30 }),

    check("canalOficial")
        .optional()
        .isBoolean().withMessage("Debe ser booleano"),

    check("valorCompromiso")
        .optional()
        .isDecimal().withMessage("Debe ser un valor decimal"),

    check("fechaCompromiso")
        .optional()
        .isISO8601().withMessage("Debe ser una fecha válida (ISO 8601)"),
];

exports.validarFiltros = [
    query("page")
        .optional()
        .isInt({ min: 1 }).withMessage("page debe ser entero >= 1"),

    query("limit")
        .optional()
        .isInt({ min: 1 }).withMessage("limit debe ser entero >= 1"),

    query("fechaDesde")
        .optional()
        .isISO8601().withMessage("fechaDesde debe ser fecha válida"),

    query("fechaHasta")
        .optional()
        .isISO8601().withMessage("fechaHasta debe ser fecha válida"),

    query("tipificacion")
        .optional()
        .isString(),

    query("asesorId")
        .optional()
        .isString(),
];
