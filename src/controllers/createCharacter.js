const { Character } = require("../db");

const createCharacter = async (
  name,
  gender,
  status,
  origin,
  species,
  episodes
) => {
  //Esto se deberia verificar
  const newCharacter = await Character.create({
    name,
    gender,
    status,
    origin,
    species,
  }); //objeto literal name:name
  // .create({}) es el INSERT DEL SQL --> le paso en un objeto los valores que necesita para crearse

  //Relacionar tablas de episodios y caracters.
  newCharacter.addEpisodes(episodes); // al momento de hacer el belongsMany me crea un metodo add para usarlo y relacionar las tablas.
  //vere reflejado en la tabla intermedia, CharacterEpisode
  return newCharacter;
};

module.exports = createCharacter;
