# Quick start 🔥

> hacer clone del repositorio

```
git clone git@gitlab.com:blueoceanstart/hack-a-boss/jsb02so/mod4-backend.git
```

> abrir carpeta "dia6/ejercicio-1" con Visual Studio

```
cd mod4-backend
code ./dia6/ejercicio-coches
```

> en la terminal del VS (o cualquier terminal en la carpeta dia5):

```
npm install
```

> crear una base de datos vacía de mysql con el nombre que queráis

> renombrar el .env.example a .env y rellenarlo con vuestros datos

❗ _en mysql_database deberéis poner la base de datos que habéis creado_

> crear las tablas

```
npm run initDB
```

> insertar datos en las tablas

```
npm run populateDB
```

> una vez hecho todo esto, solo quedaría iniciar el proyecto 😄

```
npm run dev
```

# Base de datos 💾

## Tablas

Coches

- id
- marca \*
- modelo \*
- precio \*
- color \*
- cv \*

# API 📚

- GET /coches

  - Retorna listado de coches

- GET /coches/:idCoche

  - Retorna coche con el ID solicitado

- POST /coches

  - Crear un nuevo coche.
  - Datos en el body de la petición:
    - marca
    - modelo
    - precio
    - color
    - cv
  - Retorna datos del coche creado

- PUT /coches/:idCoche

  - Actualizar el coche que tenga el id solicitado
  - Datos en el body de la petición:
    - marca
    - modelo
    - precio
    - color
    - cv
  - Retorna datos del coche actualizado

- DELETE /coches/:idCoche

  - Eliminar el coche con el id solicitado
  - Retornar un mensaje "Coche eliminado correctamente"

EXTRA: La petición GET a /coches debe permitir filtrados. Por ejemplo, puede recibir los query params marca, modelo, precio mínimo, precio máximo, color, cv min, cv max

# Dudas 🤔

Cualquier error en la app o duda que tengáis, podéis consultarme por Slack o mandarme un correo a samuel.rodriguez.rey@hackaboss.com 🤓
