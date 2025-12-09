const request = require("supertest");
const app = require("../app");
const { sequelize, Gestion } = require("../models");

describe("Pruebas E2E del módulo Gestiones", () => {

    beforeAll(async () => {
        // Sincroniza la base de datos SOLO para pruebas
        await sequelize.sync({ force: true });
    });

    afterAll(async () => {
        await sequelize.close();
    });

    let idCreado = null;

    // Crear gestión
    
    test("POST /api/gestiones -> debe crear una gestión", async () => {
        const payload = {
            clienteDocumento: "12345",
            clienteNombre: "Juan Pérez",
            asesorId: "A001",
            tipificacion: "Contacto Efectivo",
            subtipificacion: "Llamada Inicial",
            canalOficial: true,
            valorCompromiso: 150000.50,
            fechaCompromiso: "2024-01-15",
            observaciones: "Cliente respondió satisfactoriamente",
            recordingUrl: "http://recordings.com/audio1",
            estado: "abierta"
        };

        const res = await request(app)
            .post("/api/gestiones")
            .send(payload);

        expect(res.status).toBe(201);
        expect(res.body.data).toHaveProperty("id");

        idCreado = res.body.data.id;
    });

    // Obtener gestión por ID

    test("GET /api/gestiones/:id → debe obtener una gestión", async () => {
        const res = await request(app).get(`/api/gestiones/${idCreado}`);

        expect(res.status).toBe(200);
        expect(res.body.id).toBe(idCreado);
    });

    // Listar gestiones con filtros

    test("GET /api/gestiones -> debe listar gestiones", async () => {
        const res = await request(app).get("/api/gestiones?page=1&limit=10");

        expect(res.status).toBe(200);
        expect(res.body.total).toBeGreaterThan(0);
        expect(Array.isArray(res.body.resultados)).toBe(true);
    });

    // Actualizar gestión

    test("PUT /api/gestiones/:id -> debe actualizar la gestión", async () => {
        const update = {
            clienteNombre: "Juan Actualizado",
            tipificacion: "Información",
            asesorId: "A100"
        };

        const res = await request(app)
            .put(`/api/gestiones/${idCreado}`)
            .send(update);

        expect(res.status).toBe(200);
        expect(res.body.data.clienteNombre).toBe("Juan Actualizado");
    });

    // Eliminar gestión

    test("DELETE /api/gestiones/:id -> debe eliminar la gestión", async () => {
        const res = await request(app).delete(`/api/gestiones/${idCreado}`);

        expect(res.status).toBe(200);
    });

    // Confirmar eliminación
    test("GET /api/gestiones/:id -> después de borrar debe retornar 404", async () => {
        const res = await request(app).get(`/api/gestiones/${idCreado}`);

        expect(res.status).toBe(404);
    });
});
