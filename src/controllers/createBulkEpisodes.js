const { Episode } = require("../db");
//Creando un array de objetos episodios.
const createBulkEpisodes = async (episodes) => {
  const newEpisode = await Episode.bulkCreate(episodes);
  return newEpisode;
};
module.exports = createBulkEpisodes;
