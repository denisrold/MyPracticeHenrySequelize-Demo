const express = require("express");
const server = express();
const findAllEpisodes = require("./controllers/findALlEpisode");
const createEpisode = require("./controllers/createEpisode");
const createCharacter = require("./controllers/createCharacter");
const findAllCharacters = require("./controllers/findAllCharacters");
const findCharactersById = require("./controllers/findCharacterByID");
const deleteCharacter = require("./controllers/deleteCharacter");
const createBulkEpisodes = require("./controllers/createBulkEpisodes");

server.use(express.json());

server.get("/character", async (req, res) => {
  const { status } = req.query;
  try {
    const character = status
      ? await findAllCharacters({ status }) //si tengo status en la query, pasame status
      : await findAllCharacters(); //sino  traeme todo sin pasar el status
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

server.get("/character/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const pkById = await findCharactersById(id);
    res.status(200).json(pkById);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

server.get("/episode", async (req, res) => {
  // el front pide a /episode
  try {
    const episode = await findAllEpisodes(); // el back le pide la info a la bdd y  responde con esta info.
    res.status(200).json(episode);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

server.post("/character", async (req, res) => {
  //Esto se deberia verificar
  try {
    const { name, gender, status, origin, species, episodes } = req.body;
    const newCharacter = await createCharacter(
      name,
      gender,
      status,
      origin,
      species,
      episodes
    );
    res.status(201).json(newCharacter);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

server.post("/episode", async (req, res) => {
  try {
    const { name } = req.body;
    const newEpisode = await createEpisode(name);
    res.status(201).json(newEpisode);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//Creando arrays de objetos episodios.
server.post("/episode/bulk", async (req, res) => {
  try {
    const { episodes } = req.body;
    const newEpisodes = await createBulkEpisodes(episodes);
    res.status(201).json({ response: "Created OK" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

server.delete("/character/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedChar = await deleteCharacter(id);
    res.status(200).json(deletedChar);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = server;
