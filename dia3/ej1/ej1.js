/**
 * #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Servidor web que escucha cualquier request en el puerto 4000, y devuelve siempre status
 * `200` con el body:
 *
 *      {
 *          curso: 'backend'
 *      }
 *
 */

/****************RESPUESTA1****************** */
/*
const http = require("http");
const curso = require("./curso.json");

const server = http.createServer();
//Crea un servidor y lo devuelve a la const server

server.listen(4000, () => {
  console.log("Server listening at http://localhost:4000");
});
//levanto el server puerto 4k

server.on("request", (request, response) => {
  //Escucho request
  //const { method, url } = request;
  //saca el mothod y la url del objeto request
  response.statusCode = 200;
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify( curso ));
});
*/

/**
 * #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Servidor web que escucha en el puerto 4000.
 *
 * - Cuando se llama a la ruta `/curso`, devuelve status `200` con el body:
 *
 *       {
 *          curso: 'backend'
 *       }
 *
 * - Cuando se llama a cualquier ruta distinta devuelve status `200 OK` con el body:
 *
 *      {
 *          message: 'Hello world!'
 *      }
 *
 */
/*****************************RESPUESTA 2  
const http = require("http");
const curso = require("./curso.json");

const server = http.createServer();
//Crea un servidor y lo devuelve a la const server

server.listen(4000, () => {
  console.log("Server listening at http://localhost:4000");
});
//levanto el server puerto 4k

server.on("request", (request, response) => {
  const { method, url } = request;
  if (url !== "/users") {
    //Escucho request
    //const { method, url } = request;
    //saca el mothod y la url del objeto request
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    const message = {
      message: "Hello world!",
    };
    response.end(JSON.stringify(message));
  } else {
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify(curso));
  }
});
*/

/**
 * #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Servidor web que escucha en el puerto 4000.
 *
 * - Cuando se llama al *endpoint* `/curso`, devuelve status `200 OK` con el body:
 *
 *      {
 *          curso: 'backend'
 *      }
 *
 * - Cuando se llama al *endpoint* `/message`, devuelve status `200 OK` con el body:
 *
 *      {
 *          message: 'Hello world!'
 *      }
 *
 * - Cuando se llama a cualquier otro *endpoint*, devuelve status `404 NOT FOUND` con el body.
 *
 *      {
 *          message: 'No lo encuentro'
 *      }
 *
 */
