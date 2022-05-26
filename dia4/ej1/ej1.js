/**
 * #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Servidor express que gestiona objetos del tipo:
 *
 *      {
 *          email: 'pepito@gmail.com',
 *          message: 'Hola soy Pepito',
 *      }
 *
 * - Internamente usará un fichero `users.json` donde se almacenarán datos. Este archivo
 *   se sitúa en el directorio `/database` dentro de la raiz del servidor.
 *
 * - Cuando la request es un `GET` a `/api/users`, se sirven al cliente con todos los datos
 *   que hay en "users.json"
 *
 * - Cuando la request es un `POST` a `/api/users`, se incluye el objeto recibido en el "users.json", y se responde al cliente con todos los datos que hay en dicho fichero
 *
 * - Cuando es otra request cualquiera, se responde `404 NOT FOUND` sin body.
 *
 *
 * EXTRA: Utilizar el módulo dotenv, para guardar el puerto del servidor y la carpeta
 * donde guardamos los datos (database) como variables de entorno
 *
 */

const express = require("express");
const { writeFile } = require("fs");
const morgan = require("morgan");
const app = express();
const users = require("./users.json");
const { writeFile } = require("fs").promises;
const path = require("path");

app.use(express.json()); //recoge las peticiones y parsea
//contenido

/******* endpoints ***** */
app.get("/api/users", (request, response) => {
  console.log(users);
  response.statusCode = 200;
  response.send(JSON.stringify(users));
  //response.send(users);
});

app.post("/api/users", async (request, response) => {
  console.log(request.body); //poner middlware expres.json
  users.push(request.body);
  //mete al array de usuarios el body del post
  const userJsonPATH = path.join(_dirname, "./users.json");
  await writeFile(userJsonPATH, JSON.stringify(users));
  //crea fichero y mete el contenido del array users

  response.statusCode = 200;
  response.send(users);
  //el usuario NUEVO se lo mandamos en el body del postman
});
/***********middlewares*** */

/* solo llega aquí sino se mete antes por nada de lo anterior */
app.use((request, response) => {
  console.log("404 page not found");
  response.end();
});

/*******levanto server **** */

app.listen(3000, () => {
  console.log("Server listening on port: 3000");
});
