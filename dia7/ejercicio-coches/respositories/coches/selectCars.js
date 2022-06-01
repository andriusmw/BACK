const getPool = require("../../database/getPool");

const selectCars = async () => {
  const pool = getPool();

  const [cars] = await pool.query("SELECT * FROM coches");

  return cars;
};

module.exports = selectCars;
