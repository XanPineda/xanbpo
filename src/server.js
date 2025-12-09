require("dotenv").config();

const app = require("./app");
const sequelize = require("./config/database");

const PORT = process.env.PORT || 3000;

sequelize
  .authenticate()
  .then(() => {
    console.log("✓ Conexión a base de datos exitosa");

    return sequelize.sync({ alter: true });
  })
  .then(() => {
    console.log("✓ Base de datos sincronizada");

    app.listen(PORT, () => {
      console.log(`✓ Servidor iniciado en http://localhost:${PORT}/api/v1/gestiones`);
    });
  })
  .catch((err) => console.error("❌ Error al iniciar:", err));
