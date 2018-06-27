<template lang='pug'>
  .container
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
</template>

<script>
  import ContactsService from '@/services/ContactsService'
  export default {
    name: 'contacts',
    data () {
      return {
        user: null,
        contacts: null,
        sorted: []
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
      if (!this.$store.state.isUserSignedIn) {
        this.$router.push({name: 'LoginRegister'})
        return
      }
      this.user = this.$store.state.user.login
      this.contacts = this.sorted = (await ContactsService.index()).data
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
