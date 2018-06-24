const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config =require('../config/config')

function jwtSignUser (user) {
  const oneWeek = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: oneWeek
  })
}

module.exports = {
  async register (req, res){
    try {
      const user = await User.create(req.body)
      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      res.status(400).send({
        error: 'Please choose a different login'
      })
    }
  },
  async signin (req, res) {
    try {
      const {login, password} = req.body
      const user = await User.findOne({
        where: { 
          login: login
        }
      })
      if (!user) {
        return res.status(403).send({
          error: 'Incorrect login'
        })
      }
      const isPasswordValid = await user.comparePassword(password)
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'Incorrect password'
        })
      }
      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured while trying to log in'
      })
    }
  }
}