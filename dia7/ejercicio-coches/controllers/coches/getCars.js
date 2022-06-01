const { selectCars } = require("../../respositories/coches");

const getCars = async (req, res, next) => {
  try {
    const cars = await selectCars();

    res.status(200).send({ status: "ok", data: cars });
  } catch (error) {
    next(error);
  }
};

module.exports = getCars;
