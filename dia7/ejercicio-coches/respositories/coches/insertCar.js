const getPool = require("../../database/getPool");

const insertCar = async ({ marca, modelo, precio, color, cv }) => {
  const pool = getPool();

  const [{ insertId }] = await pool.query(
    "INSERT INTO coches (marca, modelo, precio, color, cv) VALUES (?, ?, ?, ?, ?)",
    [marca, modelo, precio, color, cv]
  );

  return insertId;
};

module.exports = insertCar;
