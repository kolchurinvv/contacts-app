<template lang='pug'>
  #app
    navigation
    main
      router-view
</template>

<script>
import navigation from '@/components/nav.vue'  
export default {
  name: 'app',
  components: {
    navigation
  }
}
</script>

<style lang="scss" src='@/assets/style/app.sass'>
</style>
