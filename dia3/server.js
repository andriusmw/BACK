const http = require("http");
const users = require("./users.json");

const server = http.createServer();
//Crea un servidor y lo devuelve a la const server

/********************** SERVER.ON ****************************************** */
server.on("request", (request, response) => {
  const { method, url } = request;
  //saca el mothod y la url del objeto request
  if (method === "GET" && url === "/users") {
    console.log(users);
    response.statusCode = 200;
    //Establece el codigo de estado
    response.setHeader("Content-Type", "application/json");
    //establece el header para el content type
    response.end(JSON.stringify({ status: "ok", users }));
    //JSON.stringify pasa el texto de un json
    //la respuesta manda un objeto con apartado, statuscode, headers, body,etc
  } else {
    response.statusCode = 404;
    //response.end("Not found");
    response.setHeader("Content-Type", "application/json");
    response.end(
      JSON.stringify({ status: "error", message: "Page not found :( " })
    );
  }

  //console.log(request);
  //console.log(request.url);
  //console.log(request.method);  --> nos da GET
  console.log("He recibido una request");
});
//server.on -> escucha un evento y hace lo que le digamos en el arrowfunction
//el tipo de peticion va entre comillas.
//la request  y la response se pasan al callback.

/*********************** LEVANTAR SERVIDOR *********************************** */

server.listen(3000, () => {
  console.log("Server listening at http://localhost:3000");
});
//cuando se ejecuta el servidor lo deja escuchando peticiones
//le pasamos el puerto 3000

/************************** METHODS **************************************    
    *GET: Solo pedir datos
    *POST: Enviar datos
    *PUT: Actualizar datos de algo ya publicado con POST
    *DELETE: Para eliminar datos

*****************************************************************/
