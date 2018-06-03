<template lang='pug'>
  div
    h1 {{ msg }}
    ul
      li(v-for="row in this['contact-list']") {{ row.join(', ') }}
</template>

<script src="./contacts.js">
</script>

<style >
</style>
