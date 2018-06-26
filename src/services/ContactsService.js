import Api from '@/services/Api'

export default {
  index () {
    return Api().get('contacts')
  },
  post (contact) {
    return Api().post('contacts', contact)
  }
}
