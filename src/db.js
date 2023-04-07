require("dotenv").config();
const { Sequelize } = require("sequelize"); // me traigo la clase Sequelize y los tipos de datos.
const CharacterFunction = require("./models/Characters");
const EpisodeFunction = require("./models/Episodes");
const { USER, PASSWORD, HOST, PORT, BDD } = process.env;

//Crear la conexion con la base de datos a la que quiero que mi aplicacion se conecte.
const database = new Sequelize(
  `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${BDD}`,
  { logging: false } // desactivo que me muestre en la consola el codigo de sql.
);

//DEFINIR MODELO: el modelo es la representacion de una tabla de la base de datos dentro de mi aplicacion de express.
//partir del modelo se va a crear la tabla.
//definir modelo: --> lo defino en models
CharacterFunction(database);
EpisodeFunction(database);

//Destructuro de los models de database mis modelos definidos
//para poder crear y trabajar con las relaciones y metodos.
const { Character, Episode } = database.models;
// la tabla es el reflejo del modelo y el modelo es el reflejo de la tabla.

//Creando relacion de varios a varios.
Character.belongsToMany(Episode, { through: "CharacterEpisode" });
Episode.belongsToMany(Character, { through: "CharacterEpisode" });
//{ through: "CharacterEpisode" } --> Defino la tabla intermedia para ambos.  con la propiedad through: nombredelatabla

module.exports = { database, ...database.models }; // me llevo los modelos para enrutas los pedidos
