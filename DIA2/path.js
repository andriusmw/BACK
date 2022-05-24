const path = require("path");

// Nos devuelve la extensión de un fichero
const ext = path.extname("package.json");

console.log(ext);

const pathJoined = path.join(
  "carpeta1",
  "carpeta2",
  "datos/imagenes",
  "imagen1.jpg"
);

console.log(pathJoined);

const packageJsonAbsolutePath = path.join(__dirname, "package.json");

const packageJsonAbsolutePathWithResolve = path.resolve("package.json");

console.log(packageJsonAbsolutePath, packageJsonAbsolutePathWithResolve);

// CUIDADO! Join y resolve interpretan de forma distinta un cacho de path que empiece por "/". Join lo junta de forma normal, pero resolve elimina todo el path que tenía construído hasta ese momento, y toma esa carpeta como la raíz
console.log(path.join(__dirname, "/data", "users.json"));
console.log(path.resolve(__dirname, "/data", "users.json"));

const AVATARS_DIR = "uploads/avatars";
const avatarName = "defaultAvatar.png";

console.log(path.join(__dirname, AVATARS_DIR, avatarName));
