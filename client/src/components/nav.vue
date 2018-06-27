<template lang='pug'>
  nav(v-if='this.$store.state.isUserSignedIn')
    router-link(
    v-if='contacts'
    to='/contacts'
    tag='button'
    ) All contacts

    router-link(
    v-if='createContact'
    to='/contacts/create'
    tag='button'
    ) New contact
    
    button(
    @click='signout'
    ) Sign out
</template>

<script>
  export default {
    data () {
      return {
        createContact: null,
        contacts: null
      }
    },
    methods: {
      signout () {
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)
        this.$router.push({name: 'LoginRegister'})
      },
      determineVisibility (button) {
        const visible = this.$route.name === `${button}` ? false : true
        if (visible) { return visible }
      }
    },
    watch: {
      $route () {
        this.createContact = this.determineVisibility('createContact')
        this.contacts = this.determineVisibility('contacts')
      }
    }
  }
</script>

<style >
</style>
