require("dotenv").config();
const express = require("express");

const app = express();

const { SERVER_PORT } = process.env;

const { createCar, getCarById, getCars, deletecarbyidservice } = require("./controllers/coches");

app.use(express.json());

app.get("/cars", getCars);
app.get("/cars/:carId", getCarById);
app.post("/cars", createCar);
app.put("/cars/:carId", deletecarbyidservice );
app.delete("/cars/:carId");

app.use((error, req, res, next) => {
  console.error(error);

  res.statusCode = error.statusCode || 500;
  res.send({ status: "error", message: error.message });
});

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on http://localhost:${SERVER_PORT}`);
});
