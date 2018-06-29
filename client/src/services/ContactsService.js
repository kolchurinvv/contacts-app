import Api from '@/services/Api'

export default {
  index () {
    return Api().get('contacts')
  },
  post (contact) {
    return Api().post('contacts', contact)
  },
  display (contactId) {
    return Api().get(`contacts/${contactId}`)
  },
  delete (contactId) {
    return Api().delete(`contacts/${contactId}`)
  },
  put (contact) {
    return Api().put(`contacts/${contact.id}`, contact)
  }
}