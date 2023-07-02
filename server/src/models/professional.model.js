const { Schema, model } = require('mongoose')

const professionalSchema = new Schema({
  nombre: String,
  especialidad: String,
  consultas: [{ type: Schema.Types.ObjectId, ref: 'Consult' }]
})

const Proffesional = model('Proffesional', professionalSchema)

module.exports = Proffesional
