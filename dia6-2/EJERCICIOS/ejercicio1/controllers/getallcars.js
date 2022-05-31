//hacer función que haga una query para listar todos los coches

const getPool = require("../database/getPool");

const getAllCars = async (req,res,next) => {
    try {
        //const {carId} = req.params;
        const pool = getPool();

        const [carsresult] = await pool.query(
            "SELECT * FROM coches"
            
        );
         
        if(!carsresult) {
            const error = new Error("No existe el coche");
            error.statusCode = 400;
            throw error;
        }

        res.status(200).send({status:"ok", data: carsresult});
    } catch(error) {
       /* 
        console.log("Error no identificado")
        console.log(error.message)
        res.end();*/
        next(error)
    }

    //return cocheresultado;
};

module.exports = getAllCars;