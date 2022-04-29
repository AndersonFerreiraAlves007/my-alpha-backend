const express = require('express')
const UserController = require('../controllers/user')
const AutorizationMiddleware = require('../middlewares/autorization')
const VerifyIdMiddleware = require('../middlewares/verifyId')

const router = express.Router()

router.get('/', UserController.list)

router.get('/:id', VerifyIdMiddleware, UserController.getOne)

router.post('/', UserController.create)

router.put('/:id', VerifyIdMiddleware, AutorizationMiddleware, UserController.update)

router.delete('/:id', VerifyIdMiddleware, AutorizationMiddleware, UserController.delete)

router.post('/login', UserController.login)

module.exports = router
