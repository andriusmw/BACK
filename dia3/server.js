const http = require("http");
const users = require("./users.json");

const server = http.createServer();
//Crea un servidor y lo devuelve a la const server

server.on("request", (request, response) => {
  const { method, url } = request;
  if (method === "GET" && url === "/users") {
    console.log(users);
    response.end(JSON.stringify(users));
    //JSON.stringify passa el trexto de un json
  }

  //console.log(request);
  //console.log(request.url);
  //console.log(request.method);  --> nos da GET
  console.log("He recibido una request");
});
//server.on -> escucha un evento y hace lo que le digamos en el arrowfunction
//el tipo de peticion va entre comillas.
//la request  y la response se pasan al callback.

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
