require("dotenv").config();
const getPool = require("./getPool");

const initDB = async () => {
  try {
    const pool = getPool();

    await pool.query(`DROP TABLE IF EXISTS users;`);

    console.log("Creando tabla users...");

    await pool.query(`
        CREATE TABLE Coches (
          id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
          marca VARCHAR(30) NOT NULL,
          modelo VARCHAR(30) NOT NULL,
          precio DECIMAL(6,3) NOT NULL,
          color VARCHAR(30) NOT NULL,
          cv VARCHAR(300)
        );
        `);

    console.log("¡Tabla creada!");
  } catch (err) {
    console.error(err);
  } finally {
    process.exit();
  }
};

initDB();
