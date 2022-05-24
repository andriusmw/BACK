/**
 * #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Usando el módulo fs de NodeJS, muestra por pantalla el contenido de file.txt.
 * Puedes usar callbacks o promises, aunque lo recomendable es lo segundo.
 *
 * Pista: el contenido se lee como un Buffer de datos, usa UTF-8 para leerlo.
 *
 */

const { writeAndReadFile } = require("../fs.fs");
const file = require("./file.txt");

console.log(writeAndReadFile(file));
