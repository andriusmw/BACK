/******************** REQUIREMENTS **************** */
require("dotenv").config();
const express = require("express");

const app = express();

const {SERVER_PORT} = process.env;

const getBookings = require("./controllers/bookings/getBookings")

/**************** RUTAS ************************* */

app.get("/bookings", (req,res,next) => {
    console.log("path params: ", req.params)
    console.log("query params: ", req.query)
    res.end();
}) 






app.get("/reservas/:idReserva", (req,res,next) => {
    console.log("path params: ", req.params)
    console.log("query params: ", req.query)
    res.end();
}) 

/************** LEVANTAMOS SERVER *********** */

app.listen(SERVER_PORT, () => {
    console.log("server running on port" + SERVER_PORT)
})