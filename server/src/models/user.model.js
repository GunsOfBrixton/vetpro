const { Schema, model } = require('mongoose')

const userSchema = new Schema(
  {
    nombre: String,
    apellido: String,
    correo: String,
    contraseña: String,
    telefono: { type: Number, default: null },
    direccion: { type: String, default: null },
    ciudad: { type: String, default: null },
    tipo_usuario: { type: String, default: 'paciente' },
    mascota: { type: String, default: 'Perro' },
    citas_programadas: [{ type: Schema.Types.ObjectId, ref: 'Consult' }]
  },
  { timestamps: true }
)

const User = model('User', userSchema)

module.exports = User
