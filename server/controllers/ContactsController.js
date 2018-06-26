const {Contact} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const contacts = await Contact.findAll({
        limit: 20 
      })
      res.send(contacts)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured while trying fetch contacts'
      })
    }
  },
  async post (req, res) {
    try {
      const contact = await Contact.create(req.body)
      res.send(contact)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured while trying to create contact'
      })
    }
  },
  async put (req, res) {
    try {
      const contact = await Contact.update(req.body, {
        where: {
          id: req.params.contactId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured while trying to update contact'
      })
    }
  },
  async display (req, res) {
    try {
      const contact = await Contact.findById(req.params.contactId)
      res.send(contact)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured while trying fetch contact'
      })
    }
  }
}
