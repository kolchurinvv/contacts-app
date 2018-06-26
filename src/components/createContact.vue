<template lang='pug'>
  form(name='newContact')
    input(
      name='First name'
      placeholder='First name'
      v-model="contact['First name']"
      )
    input(
      name='Surname'
      placeholder='Surname'
      v-model='contact.Surname'
      )
    input(
      name='Phone'
      placeholder='Phone'
      v-model='contact.Phone'
      )
    input(
      name='Email'
      placeholder='Email'
      v-model='contact.Email'
      )
    textarea(
      name='Notes'
      placeholder='Notes'
      v-model='contact.Notes'
      )
    button(@click='create') Save
</template>

<script>
import ContactsService from '@/services/ContactsService'
export default {
  data () {
    return {
      contact: {
        "First name": null,
        "Surname": null,
        "Phone": null,
        "Email": null,
        "Notes": null
      }
    }
  },
  methods: {
    async create () {
      try {
        await ContactsService.post()
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style >
</style>
