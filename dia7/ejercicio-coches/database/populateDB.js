require("dotenv").config();
const getPool = require("./getPool");

const populateDB = async () => {
  try {
    const pool = getPool();

    console.log("Insertando datos en coches...");

    await pool.query(
      `INSERT INTO coches (marca, modelo, precio, color, cv) VALUES 
      ("Mazda", "3", 16000, "rojo", 120), 
      ("Seat", "Leon", 20000, "azul", 110);`
    );

    console.log("¡Datos introducidos!");
  } catch (error) {
    console.error(error);
  } finally {
    process.exit();
  }
};

populateDB();
