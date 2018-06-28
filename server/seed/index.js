const {
  sequelize,
  Contact,
  User
} = require('../models')

const Promise  = require('bluebird')
const contacts = require('./contacts.json')
const users = require('./users.json')

sequelize.sync({force: true})
  .then(async function () {
    await Promise.all(
      users.map(user => {
        User.create(user)
      })
    )
    await Promise.all(
      contacts.map(contact => {
        Contact.create(contact)
      })
    )
  })
