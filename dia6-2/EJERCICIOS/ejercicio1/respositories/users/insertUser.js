const getPool = require("../../database/getPool");

const insertCar = async (id, marca, modelo, precio, color, cv) => {
  /** Nos tramos el pool */
  const pool = getPool();


  /** Realizamos una query donde insertamos un nuevo usuario con los datos recibidos por parámetro */
  const [{ insertId }] = await pool.query(
    "INSERT INTO coches (id, marca, modelo, precio, color, cv) VALUES (?, ?, ?, ? ,? ,? )",
    [id, marca, modelo, precio, color, cv]
  );

  /** Retornamos el id del nuevo usuario creado */
  return insertId;
};

module.exports = insertCar;
