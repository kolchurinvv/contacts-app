const {Contact} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      if (!req.user) { return }
      const contacts = await Contact.findAll({
        where: {
          UserId: req.user.id
        }
      })
      res.send(contacts)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured while trying fetch contacts', err
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
  async delete (req, res) {
    try {
      const contact = await Contact.findById(req.params.contactId)
      await contact.destroy()
      res.send(contact)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured while trying to delete contact'
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
