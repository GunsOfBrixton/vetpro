// ? IMPORTACIONES
const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

// ? RUTAS
const userRoutes = require('./routes/user.route')
const authRoutes = require('./routes/auth.route')

// ? IMPORTACIONES CUSTOM MIDDLEWARES
const notFound = require('./middlewares/not-found')

// ? CONSTANTES
const PORT = 3001
const URI = process.env.MONGO_DB_URI

// ? MIDDLEWARES
app.use(express.json())
app.use(cors())

// ? ENDPOINTS
app.use(userRoutes)
app.use(authRoutes)

// ? CUSTOM MIDDLEWARES
app.use(notFound)

// ? EJECUCION DEL SERVIDOR
app.listen(PORT, () => console.log(`Iniciando servidor en el puerto ${PORT}`))

// ? CONEXION CON LA BASE DE DATOS
mongoose
  .connect(URI)
  .then(() => console.log('Conexion con la base de datos exitosa'))
  .catch((error) =>
    console.log(`Ha ocurrido un error al intentar conectar con la base de datos ${error}`)
  )
