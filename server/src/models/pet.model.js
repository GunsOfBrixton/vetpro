const { Schema, model } = require('mongoose')

const petSchema = new Schema(
  {
    nombre: String,
    especie: String,
    sexo: String,
    edad: String,
    raza: String
  },
  { timestamps: true }
)

const Pet = model('Pet', petSchema)

module.exports = Pet
