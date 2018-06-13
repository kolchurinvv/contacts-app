<template lang='pug'>
  div
    h1 {{ msg }}
    ul
      li(v-for="row in this['contact-list']") {{ row.join(', ') }}
</template>

<script>
  export default {
    name: 'contacts',
    props: {
      msg: String
    },
    data(){
      return {
        contact: '',
        'contact-list': []
      }
    },
    methods:{
    },
    mounted () {
    }
  }
</script>

<style >
</style>
