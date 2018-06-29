const AuthenticationController = require('../controllers/AuthenticationController')
const ContactsController = require('../controllers/ContactsController')
const isAuthenticated = require('../policies/isAuthenticated')

module.exports = app => {
  app.post('/register',
    AuthenticationController.register)

  app.post('/signin',
    AuthenticationController.signin)

  app.get('/contacts',
    isAuthenticated,
    ContactsController.index)

  app.get('/contacts/:contactId',
    isAuthenticated,
    ContactsController.display)

  app.post('/contacts',
    isAuthenticated,
    ContactsController.post)

  app.put('/contacts/:contactId',
    isAuthenticated,
    ContactsController.put)

  app.delete('/contacts/:contactId',
    isAuthenticated,
    ContactsController.delete)
}
