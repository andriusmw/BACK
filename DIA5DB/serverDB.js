require("dotenv").config();
const express = require("express");
const fileUpload = require("express-fileupload");
const sharp = require("sharp");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const getPool = require("./database/getPool");

const app = express();

const { SERVER_PORT } = process.env;

app.use(express.json());
app.use(fileUpload());
app.use(express.static("uploads"));

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

    const avatarName = `${uuidv4()}.${imageMetadata.format}`;

    const imagePath = path.join(__dirname, "uploads", avatarName);

    await sharpImage.toFile(imagePath);

    // Si no usásemos Sharp, podríamos guardar la imagen con esta simple línea
    // await avatar.mv(imagePath);

    let cvName = "";

    if (cv) {
      cvName = `${uuidv4()}.pdf`;

      const cvPath = path.join(__dirname, "uploads", cvName);

      await cv.mv(cvPath);
    }

    const pool = getPool();

    // const [{ insertId }] = await pool.query(
    //   `INSERT INTO users (email, password, avatar, cv) VALUES ("${email}", "${password}", "${avatarName}", "${cvName}")`
    // );

    const [{ insertId }] = await pool.query(
      "INSERT INTO users (email, password, avatar, cv) VALUES (?, ?, ?, ?)",
      [email, password, avatarName, cvName]
    );

    res.status(201).send({
      status: "ok",
      message: "Usuario registrado correctamente",
      data: { id: insertId, email, avatarName },
    });
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

    res
      .status(201)
      .send({ status: "ok", message: "Coche registrado correctamente" });
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




















