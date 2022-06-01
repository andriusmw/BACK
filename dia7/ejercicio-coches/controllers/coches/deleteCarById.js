const { deletecarbyidservice} = require("../../respositories/coches/");

const deleteCarById = async (req, res, next) => {
  try {
    const { carId } = req.params;

   /* const results =*/ await deletecarbyidservice(carId);
   // console.log(results);

   /* if (!car) {
        
        const error = new Error("Car does not exist");
        error.statusCode = 404;
        throw error;
  
      
    }

   */
      res.status(200).send({ status: "ok", message : "Coche eliminado correctamente" });
        console.log("car deleted")
  } catch (error) {
    next(error);
   
  }
};

module.exports = deleteCarById;
