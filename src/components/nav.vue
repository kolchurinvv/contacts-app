<template lang='pug'>
  nav
    button(v-if='this.$store.state.isUserSignedIn' @click='signout') Sign out
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
