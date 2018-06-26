<template lang="pug">
  .container
    div {{ contact['First name'] }}
    div {{ contact.Surname }}
    div {{ contact.Phone }}
    div {{ contact.Email }}
    div {{ contact.Notes }}
    router-link(
    :to="{ name: 'editContact', params: { contactId: contact.id }}"
    tag='button'
    ) Edit
</template>

<script>
  import ContactsService from '@/services/ContactsService'
  export default {
    data () {
      return {
        contact: {}
      }
    },
    async mounted () {
      const contactId = this.$store.state.route.params.contactId
      this.contact = (await ContactsService.display(contactId)).data

    }
  }
</script>

<style >
  
</style>