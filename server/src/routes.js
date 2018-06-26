const AuthenticationController = require('../controllers/AuthenticationController')
const ContactsController = require('../controllers/ContactsController')

module.exports = app => {
  app.post('/register',
    AuthenticationController.register)

  app.post('/signin',
    AuthenticationController.signin)

  app.get('/contacts',
    ContactsController.index)

  app.get('/contacts/:contactId',
    ContactsController.display)

  app.post('/contacts',
    ContactsController.post)

  app.put('/contacts/:contactId',
    ContactsController.put)
}
