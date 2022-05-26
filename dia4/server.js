const express = require("express");
const morgan = require("morgan");
const app = express();

/**********  MIDDLEWARES ************** */
/*app.use recibe cualquier peticion que llegue*/
app.use((request, response, next) => {
  console.log("Primer middleware");
  const { method, url } = request;
  console.log("método " + method + "url " + url);
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
  response.statusCode = 200;
  response.send(JSON.stringify([{ name: "pepe" }]));
  //response.send detecta el content type automatically y envia
  //response.set("Content-Type","text/html")
  //        .setHeader()

  response.json("Hola"); //lo que responde lo manda en tipo .json
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
