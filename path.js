const path = require("path");

path.extname("package.json");
//Nos dice la extensión del fichero

path.join("carpeta1", "carpeta2", "datos/images");
//construye una ruta con todos los elementos que le pasemos

// const fs = require("fs");
const fs = require("fs").promises;

const writeAndReadFile = async (filePath, content) => {
  try {
    await fs.writeFile(filePath, content);

    const readContent = await fs.readFile(filePath, "utf-8");

    return readContent;
  } catch (error) {
    console.error(error.message);
  }
};

writeAndReadFile("data/saludo.txt", "hola").then((readContent) => {
  console.log(readContent);
});
