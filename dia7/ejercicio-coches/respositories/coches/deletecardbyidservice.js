const getPool = require("../../database/getPool");

const deletecarbyidservice = async (id) => {
  const pool = getPool();

  const [[car]] = await pool.query("DELETE * FROM coches WHERE id = ?", [id]);

  return car;
};

module.exports = deletecarbyidservice;
