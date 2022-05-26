const express = require("express");

const app = express();

/**********  MIDDLEWARES ************** */
app.use((request, response, next) => {
  console.log("Primer middleware");
  next();
});

app.use((request, response, next) => {
  console.log("Segundo middleware");
  next();
});
app.use((request, response, next) => {
  console.log("Tercer middleware");
  response.end();
});

/******************* LEVANTAR SERVER ************ */

app.listen(3000, () => {
  console.log("Server listening on port: 3000");
});
