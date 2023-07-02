const router = require('express').Router()
const { getUsers, getUserById } = require('../controllers/user.controller')

router.get('/users', getUsers)
router.get('/users/:id', getUserById)

module.exports = router
