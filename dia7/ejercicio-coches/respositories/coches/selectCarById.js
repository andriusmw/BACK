const getPool = require("../../database/getPool");

const selectCarById = async (id) => {
  const pool = getPool();

  const [[car]] = await pool.query("SELECT * FROM coches WHERE id = ?", [id]);

  return car;
};

module.exports = selectCarById;
