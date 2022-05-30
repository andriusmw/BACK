const env = require("dotenv").config();
const express = require("express");
const app = express();

const { SERVER_PORT } = process.env;

app.use(express.json());
//parsea peticiones para recibir req,body

app.post("/users", async (req,res, next) => {
   const {email, password} = req.body;

    if (!(email && password)){
        //error
        next (new Error("user email and password are required"))
    }


    res.end()
})

//recibe errores asyncronos
app.use((error,req,res,next) => {
  
   //manejar error
   console.log("Middleware perso errores")
   res.satutsCode = 500;
   res.send({satuts: "error", message: error.message})
})

app.listen(3000, ()=> {
    console.log("serverlistening on " + SERVER_PORT)
})
  
