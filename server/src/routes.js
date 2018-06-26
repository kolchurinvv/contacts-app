const AuthenticationController = require('../controllers/AuthenticationController')
const ContactsController = require('../controllers/ContactsController')

module.exports = app => {
  app.post('/register',
    AuthenticationController.register)

  app.post('/signin',
    AuthenticationController.signin)

  app.get('/contacts',
    ContactsController.index)

  app.post('/contact',
    ContactsController.post)
}
