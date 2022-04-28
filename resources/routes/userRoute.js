const express = require('express')
const router = express.Router()
const usersService = require('../services/usersService')
router
  .get('/users/:id', async (req, res) => {
    const users = await usersService.getUsers()
    res.status(200).json(users)
  })
  .get('/users/:id', async (req, res) => {
    const userId = req.param
    const user = await usersService.getUser(userId)
    res.status(200).json(user)
  })
  .post('/users', async (req, res) => {
    const user = req.body
    await usersService.saveUser(user)
    res.status(201).json('')
  })
  .put('/users', async (req, res) => {
    const user = req.body
    await usersService.updateUser(user)
    res.status(200).json('')
  })
  .delete('/users/:id', async (req, res) => {
    const userId = req.param
    await usersService.deleteUser(userId)
  })

module.exports = router
