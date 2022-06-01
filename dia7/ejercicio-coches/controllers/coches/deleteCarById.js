const { deletecarbyidservice } = require("../../respositories/coches");

const deleteCarById = async (req, res, next) => {
  try {
    const { carId } = req.params;

    const car = await selectCarById(carId);

    if (!car) {
      const error = new Error("Car does not exist");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).send({ status: "ok", data: car });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteCarById;
