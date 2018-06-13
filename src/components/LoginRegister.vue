<template lang="pug">
  .container
    h1 Welcome!
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
    h5(v-html='error')
    button(@click='signin') Sign in
    button(@click='register') Register
</template>

<script >
  import AuthenticationService from '@/services/AuthenticationService'
  export default {
    data () {
      return {
        login: '',
        password: '',
        error: null
      }
    },
    methods: {
      async register () {
        try {
          await AuthenticationService.register({
            login: this.login,
            password: this.password
          })
        } catch (error) {
          this.error = error.response.data.error
        }
      },
      async signin () {
        try {
          await AuthenticationService.signin({
            login: this.login,
            password: this.password
          })
        } catch (error){
          this.error = error.resposnse.data.error
        }
      }
    }
  }
  
</script>

<style >
  
</style>