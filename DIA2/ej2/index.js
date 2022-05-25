/**
 * #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Usando el módulo fs de NodeJS, escribe una función que acepte como argumentos
 * dos strings. El primer argumento representará el nombre del archivo (que deberá
 * estar ubicado en el mismo directorio que "index.js") y el segundo un contenido
 * a escribir en el archivo.
 *
 * Llama a esta función para escribir un fichero "file.txt" en el directorio actual
 * con el contenido "¡Hola Backend!".
 *
 */

const { createDir, writeAndReadFile } = require("../fs.fs");
const path = require("path");

const emotesDir = path.join(__dirname, "EJ2");

const createNewEjercicio = async (fileName, content) => {
  try {
    await createDir(emotesDir);

    const emoteFilePath = path.join(emotesDir, fileName);

    await writeAndReadFile(emoteFilePath, content);
  } catch (error) {
    console.error(error.message);
  }
};

createNewEjercicio("ej2.txt", "¡Hola Backend! ");
