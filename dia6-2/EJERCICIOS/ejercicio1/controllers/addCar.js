const insertCar = require("../respositories/users/insertUser");
//const uploadImage = require("../../helpers/uploadImage");
//const uploadFile = require("../../helpers/uploadFile");

const addCar = async (req, res, next) => {
  //aquí recibiríamos un form action de tipo post
  try {
    /** Nos traemos el email y la password del body */
 
    const { id, marca, modelo, precio, color, cv } = req.body;

  

    /** Si falta el email, la password o el avatar, lanzamos un error */
    if (!id) {
      const error = new Error("id obligatorio");
      error.statusCode = 400;
      throw error;
    }

    /** Insertamos los datos del usuario en la base de datos */
    const insertId = await insertCar(id, marca, modelo, precio, color, cv );

    /** Enviamos la respuesta con código 201 y un JSON que contiene los datos del usuario registrado */
    res.status(201).send({
      status: "ok",
      message: "Coche registrado correctamente",
      data: {  insertId},
    });
  } catch (err) {
    /** En caso de error, lo mandamos al middleware de errores con next(err) */
    next(err);
  }
};

module.exports = addCar;
