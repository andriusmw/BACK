const express = require("express");

const app = express();

/**********  MIDDLEWARES ************** */
/*app.use recibe cualquier peticion que llegue*/
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
});
/************ peticiones y endpoints dentro de middleware ********* */
app.get("/users", (request, response) => {
  console.log("get a users");
  response.end();
});

app.post("/users", (request, response) => {
  console.log("post a users");
  response.end();
});

app.get("/data", (request, response) => {
  console.log("get a data");
  response.end();
});

/* solo llega aquí sino se mete antes por nada de lo anterior */
app.use((request, response) => {
  console.log("404 page not found");
  response.end();
});

/******************* LEVANTAR SERVER ************ */

app.listen(3000, () => {
  console.log("Server listening on port: 3000");
});
