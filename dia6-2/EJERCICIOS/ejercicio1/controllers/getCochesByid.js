//hacer función que haga una query para listar todos los coches

const getPool = require("../database/getPool");

const getCarsById = async (req,res,next) => {
    try {
        const {carId} = req.params;
        const pool = getPool();

        const [cocheresultado] = await pool.query(
            "SELECT * FROM coches WHERE id = ?",
            [carId]
        );
         
        if(!cocheresultado) {
            const error = new Error("No existe el coche");
            error.statusCode = 400;
            throw error;
        }

        res.status(200).send({status:"ok", data: cocheresultado});
    } catch(error) {
       /* 
        console.log("Error no identificado")
        console.log(error.message)
        res.end();*/
        next(error)
    }

    //return cocheresultado;
};

module.exports = getCarsById;