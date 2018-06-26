<template lang='pug'>
  .container
    ul Contacts of {{ user | capitalize }}
      li(v-for="contact in contacts").
        {{ contact['First name'] }}
        {{ contact.Surname }}
        {{ contact.Phone }}
        {{ contact.Email }}
        {{ contact.Notes}}
</template>

<script>
  import ContactsService from '@/services/ContactsService'
  export default {
    name: 'contacts',
    data () {
      return {
        user: null,
        contacts: null
      }
    },
    async mounted () {
      if (!this.$store.state.isUserSignedIn) {
        this.$router.push({name: 'LoginRegister'})
        return
      }
      this.user = this.$store.state.user.login
      this.contacts = (await ContactsService.index()).data
    }
  }
</script>

<style >
</style>
