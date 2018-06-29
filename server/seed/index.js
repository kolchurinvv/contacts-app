const {
  sequelize,
  User,
  Contact
} = require('../models')

const Promise  = require('bluebird')
const users = require('./users.json')
const contacts = require('./contacts.json')

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
