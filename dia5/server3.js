require("dotenv").config();
const express = require("express");

const app = express();

const { SERVER_PORT } = process.env;

app.use(express.json());
app.use(fileUpload());

app.post("/users", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const {avatar} = req.files; 

    if (!(email && password && avatar)) {
      const error = new Error("User email and password are required");
      error.statusCode = 400;
      throw error;
    }

    await avatar.mv("uploads/avatar.png")
    errorAProposito;

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