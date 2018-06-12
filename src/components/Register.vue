<template lang="pug">
  .container
    input(
      type='text'
      name='login'
      placeholder='login'
      v-model='login'
      )
    input(
      type='password'
      name='password'
      placeholder='password'
      v-model='password'
      )
    button(@click='register') Register
</template>

<script >
  import AuthenticationService from '@/services/AuthenticationService'
  export default {
    data () {
      return {
        login: '',
        password: ''
      }
    },
    methods: {
      async register () {
        const response = await AuthenticationService.register({
          login: this.login,
          password: this.password
        })
      }
    }
  }
  
</script>

<style >
  
</style>