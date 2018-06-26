<template lang='pug'>
  .container
    button(@click='signout') Sign out
    ul Contacts of {{ user | capitalize }}
      li(v-for="row in this['contact-list']") {{ row.join(', ') }}
</template>

<script>
  export default {
    name: 'contacts',
    data () {
      return {
        user: null,
        'contact-list': []
      }
    },
    methods: {
      signout () {
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)
        this.$router.push({name: 'LoginRegister'})
      }
    },
    mounted () {
      this.user = this.$store.state.user.login
    }
  }
</script>

<style >
</style>
