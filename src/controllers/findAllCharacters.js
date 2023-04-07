const { Character, Episode } = require("../db"); // incluyo el modelo Episode para incluirlo en los datos del personaje.

const findAllCharacters = async (query) => {
  const characters = await Character.findAll({
    //Este metodo retorna un promesa
    where: query, //{status:"Alive"}/{status:"Dead"}/{status:"Unknow"}/{status:"undefined"}
    //Filtra segun el status enviado por query. si no llega nada en query enviara todo.
    include: {
      model: Episode, //Incluime el modelo Episode en mis personajes.
      attributes: ["name"], //del modelo Episode los atributos -> en este caso "name".
      through: {
        // de la trabla intermedia
        attributes: [], //no me traigas mas atributos
      },
    },
  });
  //.findAll()--> Traeme todos los episodios. hace un SELECT * FROM "Episode".
  return characters;
};

module.exports = findAllCharacters;
