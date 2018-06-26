<template lang='pug'>
  div
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
    },
    mounted () {
      this.user = this.$store.state.user.login
    }
  }
</script>

<style >
</style>
