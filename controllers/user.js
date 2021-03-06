const User = require('../models/user')
const { generateTokenJwt } = require('../utils/token')
const { compareHashPassword, generateHashPassword } = require('../utils/password')

module.exports = {
  list: async function (req, res) {
    try {
      const userModel = new User()
      const result = await userModel.view()
      res.status(200).json(result)
    } catch (e) {
      res.status(400).json({ message: e })
    }
  },
  getOne: async function (req, res) {
    try {
      const userModel = new User()
      const result = await userModel.view({ id: req.id })
      res.status(200).json(result[0])
    } catch (e) {
      res.status(400).json({ message: e })
    }
  },
  create: async function (req, res) {
    try {
      const userModel = new User()
      const result = await userModel.insert({
        ...req.body,
        password: await generateHashPassword(req.body.password)
      })
      res.status(200).json(result)
    } catch (e) {
      res.status(400).json({ message: e })
    }
  },
  update: async function (req, res) {
    try {
      const userModel = new User(req.user_id)
      const result = await userModel.edit(req.id, req.body.password
        ? {
            ...req.body,
            password: await generateHashPassword(req.body.password)
          }
        : {
            ...req.body
          })
      res.status(200).json(result)
    } catch (e) {
      res.status(400).json({ message: e })
    }
  },
  delete: async function (req, res) {
    try {
      const userModel = new User(req.user_id)
      const result = await userModel.delete(req.id)
      res.status(200).json(result)
    } catch (e) {
      res.status(400).json({ message: e })
    }
  },
  login: async function (req, res) {
    try {
      const userModel = new User()
      const [user] = await userModel.view({
        email: req.body.email
      })
      if (user) {
        if (await compareHashPassword(req.body.password, user.password)) {
          const token = await generateTokenJwt({ user_id: user.id })
          res
            .status(200)
            .cookie('access_token', token, {
              httpOnly: true,
              secure: true
            })
            .json({
              token,
              user_id: user.id
            })
        } else {
          res.status(400).json({ message: 'Senha incorreta!' })
        }
      } else {
        res.status(400).json({ message: 'Username n??o cadastrado!' })
      }
    } catch (e) {
      res.status(400).json({ message: e })
    }
  }
}
