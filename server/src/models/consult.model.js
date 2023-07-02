import { Schema, model } from 'mongoose'

const consultSchema = new Schema(
  {
    fecha: Date,
    servicio: String,
    profesional: String,
    hora: String,
    mascota: String
  },
  { timestamps: true }
)

const Consult = model('Consult', consultSchema)

module.exports = Consult
