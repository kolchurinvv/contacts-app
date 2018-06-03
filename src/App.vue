<template lang='pug'>
  #app
    contacts(:msg="mgs")
</template>

<script>
import contacts from './components/contacts.vue'

export default {
	name: 'app',
	components: {
		contacts
	},
	data() {
		return {
			mgs: 'new message'
		}
	}
}
</script>

<style lang="scss" src='@/assets/style/app.sass'>
</style>
