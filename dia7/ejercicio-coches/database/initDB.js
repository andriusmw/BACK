require("dotenv").config();
const getPool = require("./getPool");

const initDB = async () => {
  try {
    const pool = getPool();

    console.log("Borrando tablas existentes...");

    await pool.query("DROP TABLE IF EXISTS coches;");

    console.log("Creando tabla coches...");

    await pool.query(`
          CREATE TABLE coches (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            marca VARCHAR(50) NOT NULL,
            modelo VARCHAR(50) NOT NULL,
            precio INT NOT NULL,
            color VARCHAR(50) NOT NULL,
            cv INT NOT NULL
          );
        `);

    console.log("¡Tablas creadas!");
  } catch (error) {
    console.error(error);
  } finally {
    process.exit();
  }
};

initDB();
