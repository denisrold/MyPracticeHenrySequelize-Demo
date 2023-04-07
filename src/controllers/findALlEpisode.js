const { Episode } = require("../db");

const findAllEpisodes = async () => {
  const episodes = await Episode.findAll(); //Este metodo retorna un promesa
  //.findAll()--> Traeme todos los episodios. hace un SELECT * FROM "Episode"
  return episodes;
};

module.exports = findAllEpisodes;
