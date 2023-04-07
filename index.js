const server = require("./src/server.js");
const { database } = require("./src/db.js");

database
  .sync({ alter: true }) //sincronizo con la base de datos. PRIMERO SINCRONIZO,
  //recordar siempre IMPORTANTE EL {force:true} reseteara mis tablas de la base de datos en base a los modelos.
  //alter: true --> para hacer cambios chicos, que no afectan a los datos guardados, este atributo no me elimina todas las tablas.
  .then(() => {
    // ENTONCES -> LEVANTO EL SERVER.
    server.listen("3001", () => {
      console.log("Listening on port 3001");
    });
  })
  .catch((error) => {
    console.log(error);
  });
