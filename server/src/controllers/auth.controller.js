const User = require('../models/user.model')

async function signUp(request, response) {
  const { nombre, apellido, correo, contraseña } = request.body

  try {
    const user = await User.findOne({ correo })

    if (user) {
      return response.status(400).json({ message: 'the user with that email already exists' })
    }

    const newUser = new User({ nombre, apellido, correo, contraseña })
    await newUser.save()

    response.json(newUser)
  } catch (error) {
    console.log(error)
  }
}

async function signIn(request, response) {
  const { correo, contraseña } = request.body

  try {
    const user = await User.findOne({ correo })
    const verifyPassword = user?.contraseña === contraseña

    if (!user || !verifyPassword) {
      return response.status(400).json({ message: 'correo o contraseña invalidos' })
    }

    response.json(user)
  } catch (error) {
    console.log(error)
  }
}

module.exports = { signIn, signUp }
