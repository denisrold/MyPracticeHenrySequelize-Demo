const { DataTypes } = require("sequelize");
//defino modelo:
module.exports = (database) => {
  database.define(
    "Character",
    {
      //*********/(NOMBRE, ATRIBUTOS)
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true, //indica unique y notnull
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false, //permitenull?
      },
      gender: { type: DataTypes.STRING },
      status: {
        type: DataTypes.ENUM("Alive", "Dead", "Unknow"),
        defaultValue: "Alive", // si no le pongo un valor el pj esta alive
      },
      origin: { type: DataTypes.STRING },
      species: { type: DataTypes.STRING },
    },
    { timestamps: false } // desactiva el createdAt y el updatedAt
  );
};
//Dentro del modelo puedo hacer las validaciones y constrains correspondientes.
