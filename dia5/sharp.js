require("dotenv").config();
const express = require("express");
const fileUpload = require("express-fileupload");
const sharp = require("sharp");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const app = express();

const { SERVER_PORT } = process.env;

app.use(express.json());
app.use(fileUpload());

app.post("/users", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const { avatar, cv } = req.files;

    if (!(email && password && avatar)) {
      const error = new Error("User email, password and avatar are required");
      error.statusCode = 400;
      throw error;
    }

    const sharpImage = sharp(avatar.data);

    const imageMetadata = await sharpImage.metadata();

    console.log(imageMetadata);

    if (imageMetadata.width > 1000) {
      sharpImage.resize(1000);
    }

    const imagePath = path.join(
      __dirname,
      "uploads",
      `${uuidv4()}.${imageMetadata.format}`
    );

    await sharpImage.toFile(imagePath);

    // await avatar.mv("uploads/avatar.png");

    // if (cv) {
    //   await cv.mv("uploads/cv.pdf");
    // }

    // errorAProposito;

    res.end();
  } catch (err) {
    next(err);
  }
});

app.post("/cars", async (req, res, next) => {
  try {
    const { brand, model } = req.body;

    if (!(brand && model)) {
      const error = new Error("Car brand and model are required");
      error.statusCode = 400;
      throw error;
    }

    errorAProposito;

    res.end();
  } catch (err) {
    next(err);
  }
});

app.use((req, res, next) => {
  console.log("Middleware normal...");
});

app.use((error, req, res, next) => {
  console.error(error);

  res.statusCode = error.statusCode || 500;
  res.send({ status: "error", message: error.message });
});

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on http://localhost:${SERVER_PORT}`);
});
marca_de_verificación_blanca
ojos
manos_levantadas










