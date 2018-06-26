<template lang='pug'>
  .container
    button(@click='signout') Sign out
    ul Contacts of {{ user | capitalize }}
      li(v-for="contact in contacts") {{ contact['First name'] }}
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
    methods: {
      signout () {
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)
        this.$router.push({name: 'LoginRegister'})
      }
    },
    async mounted () {
      this.user = this.$store.state.user.login
      this.contacts = await ContactsService.index().data
    }
  }
</script>

<style >
</style>
