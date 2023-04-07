const { Character } = require("../db");

const deleteCharacter = async (id) => {
  const deleteCharacter = await Character.findByPk(id);
  const aux = { ...deleteCharacter };
  await deleteCharacter.destroy();
  return `El personaje ${aux.dataValues.name} con id ${aux.dataValues.id} ha sido eliminado.`;
};

module.exports = deleteCharacter;
