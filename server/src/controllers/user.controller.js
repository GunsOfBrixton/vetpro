const User = require('../models/user.model')

async function getUsers(request, response) {
  const users = await User.find()
  response.json(users)
}

async function getUserById(request, response) {
  const { id } = request.params
  try {
    const user = await User.findById(id)

    if (!user) {
      return response.status(400).json({ message: 'usuario no encontrado' })
    }

    response.json(user)
  } catch (error) {
    console.log(error)
  }
}

module.exports = { getUsers, getUserById }
