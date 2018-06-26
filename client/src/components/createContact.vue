<template lang="pug">
  .container
    input(
      type='text'
      name='First name'
      placeholder='First name'
      v-model="contact['First name']"
      )
    input(
      type='text'
      name='Surname'
      placeholder='Surname'
      v-model='contact.Surname'
      )
    input(
      type='text'
      name='Phone'
      placeholder='Phone'
      v-model='contact.Phone'
      )
    input(
      type='email'
      name='Email'
      placeholder='Email'
      v-model='contact.Email'
      )
    textarea(
      type='text'
      name='Notes'
      placeholder='Notes'
      v-model='contact.Notes'
      )
    button(@click='post') Save
</template>

<script >
  import ContactsService from '@/services/ContactsService'
  export default {
    data () {
      return {
        contact: {
          'First name': null,
          Surname: null,
          Phone: null,
          Email: null,
          Notes: null
        } 
      }
    },
    methods: {
      async post () {
        try {
          await ContactsService.post(this.contact)
        } catch (err) {
          console.log(err)
        }
      }
    }
  }
  
</script>

<style >
  
</style>