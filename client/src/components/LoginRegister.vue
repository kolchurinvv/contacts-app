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
    h5(v-html="error")
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
          const response = await AuthenticationService.signin({
            login: this.login,
            password: this.password
          })
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
          const isSignedIn = await this.$store.state.isUserSignedIn
          if (isSignedIn) {
            this.$router.push({name: 'contacts'})
          }
        } catch (error){
          this.error = error.response.data.error
        }
      }
    }
  }
  
</script>

<style >
  
</style>