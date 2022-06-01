const { insertCar } = require("../../respositories/coches");

const createCar = async (req, res, next) => {
  try {
    const { marca, modelo, precio, color, cv } = req.body;

    if (!(marca && modelo && precio && color && cv)) {
      const error = new Error(
        "Car must have brand, model, price, color and cv"
      );
      error.statusCode = 400;
      throw error;
    }

    const carData = { marca, modelo, precio, color, cv };

    const insertId = await insertCar(carData);

    res.status(201).send({
      status: "ok",
      data: {
        id: insertId,
        ...carData,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createCar;
