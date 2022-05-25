/*********** PETICIONES TIPO POST *********** */

/*  

    FORMATYOS BODY:
        X-WWW-FORM-URL-ENCODED

*/

const http = require("http");

const server = http.createServer();
//Crea un servidor y lo devuelve a la const server

server.listen(3000, () => {
  console.log("Server listening at http://localhost:3000");
});
//levanto el server puerto 4k

server.on("request", (request, response) => {
  const chunksArray = [];
  request.on("data", (chunk) => {
    console.log(chunk);
    chunksArray.push(chunk);

    request.on("end", () => {
      console.log(chunksArray);
      console.log(Buffer.concat(chunksArray).toString());
    });
  });
});
