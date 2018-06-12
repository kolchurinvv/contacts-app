<template lang='pug'>
  div
    h1 {{ msg }}
    ul
      li(v-for="row in this['contact-list']") {{ row.join(', ') }}
</template>

<script>
  import sqlCall from './sqlCall'
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
      sqlCall
    },
    mounted () {
      this.sqlCall()
    }
  }
</script>

<style >
</style>
