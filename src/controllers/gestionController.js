const gestionService = require("../services/gestionService");

class GestionController {
    
    // Crear una nueva gestión
    async crear(req, res) {
        try {
            const nuevaGestion = await gestionService.crearGestion(req.body);
            return res.status(201).json({
                mensaje: "Gestión creada exitosamente",
                data: nuevaGestion,
            });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    // Obtener una gestión por ID
    async obtenerUno(req, res) {
        try {
            const { id } = req.params;
            const gestion = await gestionService.obtenerPorId(id);

            return res.status(200).json(gestion);
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }

    // Listar gestiones con filtros y paginación
    async listar(req, res) {
    try {
        const filtros = {
            page: parseInt(req.query.page, 10) || 1,
            limit: parseInt(req.query.limit, 10) || 10,
            fechaDesde: req.query.fechaDesde,
            fechaHasta: req.query.fechaHasta,
            tipificacion: req.query.tipificacion,
            asesorId: req.query.asesorId,
            q: req.query.q || null
        };

        const resultados = await gestionService.listarGestiones(filtros);

        return res.status(200).json(resultados);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
}

    // Actualizar una gestión por ID
    async actualizar(req, res) {
        try {
            const { id } = req.params;
            const updated = await gestionService.actualizarGestion(id, req.body);

            return res.status(200).json({
                mensaje: "Gestión actualizada correctamente",
                data: updated,
            });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    // Eliminar una gestión
    async eliminar(req, res) {
        try {
            const { id } = req.params;
            const resultado = await gestionService.eliminarGestion(id);

            return res.status(200).json(resultado);
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }

    // Actualizar parcialmente una gestión por ID

    async actualizarParcial(req, res) {
    try {
        const { id } = req.params;
        const result = await gestionService.actualizarParcial(id, req.body);

        return res.status(200).json({
            mensaje: "Gestión actualizada parcialmente",
            data: result
        });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

}

module.exports = new GestionController();
