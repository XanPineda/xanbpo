const express = require("express");
const app = express();
const gestionRoutes = require("./routes/gestionRoutes");

// Middlewares globales
app.use(express.json());

// Rutas del módulo gestiones
app.use("/api/v1/gestiones", gestionRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});


module.exports = app;