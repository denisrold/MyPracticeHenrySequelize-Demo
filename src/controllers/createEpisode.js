const { Episode } = require("../db");

const createEpisode = async (name) => {
  const newEpisode = await Episode.create({ name }); //objeto literal name:name
  // .create({}) es el INSERT DEL SQL --> le paso en un objeto los valores que necesita para crearse
  return newEpisode;
};

module.exports = createEpisode;
