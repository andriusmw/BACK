const getPool = require("../../database/getPool");

const deletecarbyidservice = async (id) => {
  const pool = getPool();

 /* const results = */await pool.query("DELETE FROM coches WHERE id = ?", [id]);

 /* return results;*/
 return true;
};

module.exports = deletecarbyidservice;
