const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Gestion = sequelize.define(
    "Gestion",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        clienteDocumento: {
            type: DataTypes.STRING(15),
            allowNull: false,
        },
        clienteNombre: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        asesorId: {
            type: DataTypes.STRING(15),
            allowNull: false,
        },
        tipificacion: {
            type: DataTypes.ENUM("Contacto Efectivo", "No Contacto", "Promesa de Pago", "Pago Realizado", "Refinanciación", "Información", "Escalamiento", "Otros"),
            allowNull: false,
        },
        subtipificacion: {
            type: DataTypes.STRING(30),
            allowNull: true,
        },
        canalOficial: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        valorCompromiso: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true,
        },
        fechaCompromiso: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        observaciones: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        recordingUrl: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        estado: {
            type: DataTypes.ENUM("abierta", "cerrada"),
            allowNull: false,
            defaultValue: "abierta",
        },
        
    },
    {
        tableName: "gestiones",
        timestamps: true,
        createdAt: "creado_en",
        updatedAt: "actualizado_en",
        indexes: [
            { fields: ["clienteDocumento"] },
            { fields: ["asesorId"] },
            { fields: ["tipificacion"] }
        ]
    }
);

module.exports = Gestion;
