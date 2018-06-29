<template lang='pug'>
  .container
    .contacts(v-if='user')
      button(@click="sortAlpabeticallyBy('First name')") Sort by first name
      button(@click="sortAlpabeticallyBy('Surname')") Sort by surname
      ul Contacts of {{ user | capitalize }}
        router-link.contact-preview(
          :to="{ name: 'contact', params: { contactId: contact.id }}"
          tag='li'
          v-for="contact in sorted" :key='contact.id')
          | {{ contact['First name'] }}
          | {{ contact.Surname }} 
          em.note {{ contact.Notes }}
    h4(v-if='message') {{ message }}
</template>

<script>
  import ContactsService from '@/services/ContactsService'
  export default {
    name: 'contacts',
    data () {
      return {
        user: null,
        contacts: null,
        sorted: [],
        message: null
      }
    },
    methods: {
      sortAlpabeticallyBy (attrName) {
      let replacement
      let tmp = []
      this.sorted = []
      this.contacts.forEach((contact) => {
        tmp.push([ contact[`${attrName}`], contact.id])
        return tmp.sort()
      })
      tmp.forEach(contact => {
        replacement = this.contacts.find(element => { return element.id === contact[1] } )
        this.sorted.push(replacement)
      })
      }
    },
    async mounted () {
      try {
        this.contacts = this.sorted = (await ContactsService.index()).data
        if (!this.contacts.length) {
          this.message = "You haven't added any contacts. Go make some friends!"
        }
        this.user = this.$store.state.user.login
      } catch (error) {
        this.message = error.response.data.error
        setTimeout(() => {this.$router.push({name: 'LoginRegister'})}, 2000)
      }

    }
  }
</script>

<style lang='sass' scoped>
  .contact-preview
    cursor: pointer
  .note
    cursor: text
    color: #999
</style>
