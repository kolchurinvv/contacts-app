<template lang='pug'>
  #app
    contacts
</template>

<script>
import Contacts from './components/Contacts.vue'
{/*import Register from './components/Register.vue'*/}

export default {
  name: 'app',
  components: {
    Contacts
  },
}
</script>

<style lang="scss" src='@/assets/style/app.sass'>
</style>
