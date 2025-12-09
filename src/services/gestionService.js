const Gestion = require("../models/gestion");
const { Op } = require("sequelize");

class GestionService {
    
    // Crear una nueva gestión
    async crearGestion(data) {
        return await Gestion.create(data);
    }

    // Obtener una gestión por ID
    async obtenerPorId(id) {
        const gestion = await Gestion.findByPk(id);
        if (!gestion) {
            throw new Error("Gestión no encontrada");
        }
        return gestion;
    }

    // Listado con filtros + paginación
    async listarGestiones({ page = 1, limit = 10, fechaDesde, fechaHasta, tipificacion, asesorId, q}) {

        const offset = (page - 1) * limit;

        const where = {};

        // Filtro por rango de fechas (campo: fechaCompromiso)
        if (fechaDesde || fechaHasta) {
            where.fechaCompromiso = {};

            if (fechaDesde) where.fechaCompromiso[Op.gte] = new Date(fechaDesde);
            if (fechaHasta) where.fechaCompromiso[Op.lte] = new Date(fechaHasta);
        }

        // Filtro por tipificación
        if (tipificacion) {
            where.tipificacion = tipificacion;
        }

        // Filtro por asesor
        if (asesorId) {
            where.asesorId = asesorId;
        }

        if (q) {
            where[Op.or] = [
                { clienteDocumento: { [Op.like]: `%${query.q}%` } },
                { clienteNombre: { [Op.like]: `%${query.q}%` } }
            ];
        }

        const { rows, count } = await Gestion.findAndCountAll({
            where,
            limit,
            offset,
            order: [["creado_en", "DESC"]],
        });

        return {
            total: count,
            pagina: page,
            limite: limit,
            resultados: rows,
        };
    }

    // Actualizar una gestión por ID
    async actualizarGestion(id, data) {
        const gestion = await this.obtenerPorId(id);
        return await gestion.update(data);
    }

    // Eliminar una gestión por ID
    async eliminarGestion(id) {
        const gestion = await this.obtenerPorId(id);

        await gestion.update({ estado: "cerrada" });

        return {
            mensaje: "Gestión cerrada (borrado lógico)",
            id
        };
    }
}

module.exports = new GestionService();
