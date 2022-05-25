const http = require("http");

const server = http.createServer();
//Crea un servidor y lo devuelve a la const server

server.on("request", (request, response) => {
  console.log(request);
  //console.log("He recibido una request");
});
//server.on -> escucha un evento y hace lo que le digamos en el arrowfunction
//el tipo de peticion va entre comillas.
//la request  y la response se pasan al callback.

server.listen(3000, () => {
  console.log("Server listening at http://localhost:3000");
});
//cuando se ejecuta el servidor lo deja escuchando peticiones
//le pasamos el puerto 3000
