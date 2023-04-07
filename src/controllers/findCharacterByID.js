const { Character, Episode } = require("../db"); // incluyo el modelo Episode para incluirlo en los datos del personaje.

const findCharactersById = async (id) => {
  const characters = await Character.findByPk(id, {
    include: {
      model: Episode,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  if (!characters) return "No existe personaje con esa ID.";
  return characters;
};

module.exports = findCharactersById;
