<template lang='pug'>
  nav
    button(v-if='this.$store.state.isUserSignedIn' @click='signout') Sign out
    router-link(to='/contacts/create' tag='button' v-if='this.$store.state.isUserSignedIn') New contact
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
