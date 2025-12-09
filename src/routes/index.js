const express = require("express");
const router = express.Router();

const gestionRoutes = require("./gestion.routes");

router.use("/gestiones", gestionRoutes);

module.exports = router;
