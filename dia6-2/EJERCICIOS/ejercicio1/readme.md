# base de datos

Cars

-id
-marca
-modelo
-precio
-color
-cv (caballos)

# API

get/coches
    -Debe enviar todos los coches de la db

get/coches/:idCoche
    -Debe enviar los datos del coche solicitado. 

POST/coches
    -Permite crear nuevo coche. En el body recibir datos     

EXTRA:La peticion GET a /coches debe permitir filtrados    .
Por ejemplo puede recibir query params, marca, modelo, precio min, precio max, color, cv min, cv max  