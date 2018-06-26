<template lang='pug'>
  nav(v-if='this.$store.state.isUserSignedIn')
    button(
    @click='signout'
    ) Sign out
    
    router-link(
    to='/contacts'
    tag='button'
    ) All contacts

    router-link(
    to='/contacts/create'
    tag='button'
    ) New contact
</template>

<script>
  export default {
    methods: {
      signout () {
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)
        this.$router.push({name: 'LoginRegister'})
      }
    }
  }
</script>

<style >
</style>
