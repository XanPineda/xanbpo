const express = require("express");
const router = express.Router();

const gestionRoutes = require("./gestionRoutes");

router.use("/gestiones", gestionRoutes);

module.exports = router;
