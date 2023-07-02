const router = require('express').Router()
const { signIn, signUp } = require('../controllers/auth.controller')

router.post('/auth/login', signIn)
router.post('/auth/register', signUp)

module.exports = router
